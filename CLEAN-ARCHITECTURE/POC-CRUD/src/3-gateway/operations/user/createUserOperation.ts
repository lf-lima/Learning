import { CreateUserDTO } from '../../../2-business/dto/user'
import { IHttpRequest } from '../../modules/http/httpRequest'
import { HttpBadRequestResponse, HttpInternalErrorResponse, HttpSuccessResponse, IHttpResponse } from '../../modules/http/httpResponse'
import { IInputCreateUser, InputCreateUser } from '../../serializers/user/inputCreateUser'
import { ICreateUserUseCase } from '../../../2-business/useCases/user/createUserUseCase'
import { IFindUserByEmailUseCase } from '../../../2-business/useCases/user/findUserByEmailUseCase'
import { IHttpResponseError } from '../../modules/errors/http/httpReponseErrors'
import { IUser } from '../../../1-domain/entities/iUser'
import { IBaseOperation } from '../base/iBaseOperation'

export type ICreateUserOperation = IBaseOperation<IInputCreateUser, IUser>

export class CreateUserOperation implements ICreateUserOperation {
  private createUserUseCase!: ICreateUserUseCase
  private findUserByEmailUseCase!: IFindUserByEmailUseCase

  constructor (createUserUseCase: ICreateUserUseCase, findUserByEmailUseCase: IFindUserByEmailUseCase) {
    this.createUserUseCase = createUserUseCase
    this.findUserByEmailUseCase = findUserByEmailUseCase
  }

  async run (httpRequest: IHttpRequest<IInputCreateUser>): Promise<IHttpResponse<IUser | IHttpResponseError[]>> {
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
          message: {
            userExists: 'User Already Exists in System'
          }
        }])
      }

      return new HttpSuccessResponse(await this.createUserUseCase.run(dto))
    } catch (error) {
      return new HttpInternalErrorResponse([{
        name: 'error',
        message: {
          internalError: error.message
        }
      }])
    }
  }
}
