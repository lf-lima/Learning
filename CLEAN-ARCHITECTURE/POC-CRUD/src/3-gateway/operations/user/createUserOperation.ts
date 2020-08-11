import { CreateUserDTO } from '../../../2-business/dto/user'
import { IHttpRequest } from '../../modules/http/httpRequest'
import { HttpBadRequestResponse, HttpInternalErrorResponse, HttpSuccessResponse, IHttpResponse } from '../../modules/http/httpResponse'
import { InputCreateUser } from '../../serializers/user/inputCreateUser'
import { IBaseOperation } from '../base/iBaseOperation'
import { ICreateUserUseCase } from '../../../2-business/useCases/user/createUserUseCase'
import { IFindUserByEmailUseCase } from '../../../2-business/useCases/user/findUserByEmailUseCase'

export interface ICreateUserOperation extends IBaseOperation {
  findUserByEmailUseCase: IFindUserByEmailUseCase
}

export class CreateUserOperation implements ICreateUserOperation {
  public useCase!: ICreateUserUseCase
  public findUserByEmailUseCase!: IFindUserByEmailUseCase

  constructor (useCase: ICreateUserUseCase, findUserByEmailUseCase: IFindUserByEmailUseCase) {
    this.useCase = useCase
    this.findUserByEmailUseCase = findUserByEmailUseCase
  }

  async run (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const inputCreateUser = new InputCreateUser(httpRequest.body)

      const errors = await inputCreateUser.validate()

      if (inputCreateUser.hasError) {
        return new HttpBadRequestResponse(errors)
      }

      const dto = new CreateUserDTO(httpRequest.body)

      const userAlreadyExists = await this.findUserByEmailUseCase.run({ email: dto.email })

      if (userAlreadyExists) {
        return new HttpBadRequestResponse('User Already Exists')
      }

      return new HttpSuccessResponse(await this.useCase.run(dto))
    } catch (error) {
      return new HttpInternalErrorResponse(error.message)
    }
  }
}
