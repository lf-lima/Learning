import { CreateUserDTO, ICreateUserDTO } from '../../../2-business/dto/user'
import { IHttpRequest } from '../../modules/http/httpRequest'
import { HttpBadRequestResponse, HttpInternalErrorResponse, HttpSuccessResponse, IHttpResponse } from '../../modules/http/httpResponse'
import { InputCreateUser } from '../../serializers/user/inputCreateUser'
import { IBaseOperation } from '../base/iBaseOperation'
import { ICreateUserUseCase } from '../../../2-business/useCases/user/createUserUseCase'
import { IFindUserByEmailUseCase } from '../../../2-business/useCases/user/findUserByEmailUseCase'
import { IUserRepository } from '../../../2-business/repositories/iUserRepository'
import { IHttpResponseError } from '../../modules/errors/http/httpReponseErrors'
import { IUser } from '../../../1-domain/entities/iUser'

export interface ICreateUserOperation extends IBaseOperation<IUserRepository, ICreateUserDTO> {
  findUserByEmailUseCase: IFindUserByEmailUseCase
}

export class CreateUserOperation implements ICreateUserOperation {
  public useCase!: ICreateUserUseCase
  public findUserByEmailUseCase!: IFindUserByEmailUseCase

  constructor (useCase: ICreateUserUseCase, findUserByEmailUseCase: IFindUserByEmailUseCase) {
    this.useCase = useCase
    this.findUserByEmailUseCase = findUserByEmailUseCase
  }

  async run (httpRequest: IHttpRequest<ICreateUserDTO>): Promise<IHttpResponse<IUser | IHttpResponseError[]>> {
    try {
      const inputCreateUser = new InputCreateUser(httpRequest.body)

      const errors = await inputCreateUser.validate()

      if (inputCreateUser.hasError) {
        return new HttpBadRequestResponse(errors)
      }

      const dto = new CreateUserDTO(httpRequest.body)

      const userAlreadyExists = await this.findUserByEmailUseCase.run({ email: dto.email })

      if (userAlreadyExists) {
        return new HttpBadRequestResponse([{
          name: 'user',
          message: { userExists: 'User Already Exists' }
        }])
      }

      return new HttpSuccessResponse(await this.useCase.run(dto))
    } catch (error) {
      return new HttpInternalErrorResponse(error.message)
    }
  }
}
