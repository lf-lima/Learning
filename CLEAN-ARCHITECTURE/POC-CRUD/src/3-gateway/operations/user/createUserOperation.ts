import { IHttpRequest } from '../../../2-business/modules/helpers/httpRequest'
import { HttpResponse, IHttpResponse } from '../../../2-business/modules/helpers/httpResponse'
import { IBaseUseCase } from '../../../2-business/useCases/base/iBaseUseCase'
import { IBaseOperation } from '../base/iBaseOperation'

export interface ICreateUserOperation extends IBaseOperation {
  useCase: IBaseUseCase
}

export class CreateUserOperation implements ICreateUserOperation {
  public useCase!: IBaseUseCase

  constructor (useCase: IBaseUseCase) {
    this.useCase = useCase
  }

  async run (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const dto = httpRequest.body
      // valida
      return new HttpResponse({ statusCode: 200, message: 'Success', body: await this.useCase.run(dto) })
    } catch (error) {
      return new HttpResponse({ statusCode: 500, message: 'Server Internal Error', body: error })
    }
  }
}
