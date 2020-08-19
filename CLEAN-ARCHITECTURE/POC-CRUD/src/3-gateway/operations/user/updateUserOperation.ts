import { IUser } from '../../../1-domain/entities/iUser'
import { UpdateUserDTO } from '../../../2-business/dto/user'
import { IFindUserByEmailUseCase } from '../../../2-business/useCases/user/findUserByEmailUseCase'
import { IFindUserByIdUseCase } from '../../../2-business/useCases/user/findUserByIdUseCase'
import { IUpdateUserUseCase } from '../../../2-business/useCases/user/updateUserUseCase'
import { IHttpResponseError } from '../../modules/errors/http/httpReponseErrors'
import { IHttpRequest } from '../../modules/http/httpRequest'
import { HttpBadRequestResponse, HttpInternalErrorResponse, HttpSuccessResponse, IHttpResponse } from '../../modules/http/httpResponse'
import { IInputUpdateUser, InputUpdateUser } from '../../serializers/user/inputUpdateUser'
import { IBaseOperation } from '../base/iBaseOperation'

export type IUpdateUserOperation = IBaseOperation<IInputUpdateUser, IUser>

export class UpdateUserOperation implements IUpdateUserOperation {
  private updateUserUseCase!: IUpdateUserUseCase
  private findUserByEmailUseCase!: IFindUserByEmailUseCase
  private findUserByIdUseCase!: IFindUserByIdUseCase

  constructor (
    updateUserUseCase: IUpdateUserUseCase,
    findUserByEmailUseCase: IFindUserByEmailUseCase,
    findUserByIdUseCase: IFindUserByIdUseCase
  ) {
    this.updateUserUseCase = updateUserUseCase
    this.findUserByEmailUseCase = findUserByEmailUseCase
    this.findUserByIdUseCase = findUserByIdUseCase
  }

  async run (httpRequest: IHttpRequest<IInputUpdateUser>): Promise<IHttpResponse<IUser | IHttpResponseError[]>> {
    try {
      httpRequest.body.userId = Number(httpRequest.body.userId)

      const inputUpdateUser = new InputUpdateUser(httpRequest.body)

      const errors = await inputUpdateUser.validate()

      if (inputUpdateUser.hasError) {
        return new HttpBadRequestResponse(errors)
      }

      const dto = new UpdateUserDTO(httpRequest.body)

      const user = await this.findUserByIdUseCase.run({ userId: dto.userId })

      if (!user) {
        return new HttpBadRequestResponse([{
          name: 'user',
          message: {
            userNotExists: 'User not Exists in System'
          }
        }])
      }

      if (dto.email) {
        const userWithEmail = await this.findUserByEmailUseCase.run({ email: dto.email })

        if (userWithEmail && dto.email !== user.email) {
          return new HttpBadRequestResponse([{
            name: 'user',
            message: {
              userExists: 'User Already Exists in System'
            }
          }])
        }
      }

      return new HttpSuccessResponse(await this.updateUserUseCase.run(dto))
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
