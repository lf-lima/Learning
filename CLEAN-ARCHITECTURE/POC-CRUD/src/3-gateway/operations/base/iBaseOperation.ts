import { IHttpRequest } from '../../../2-business/modules/helpers/httpRequest'
import { IHttpResponse } from '../../../2-business/modules/helpers/httpResponse'
import { IBaseUseCase } from '../../../2-business/useCases/base/iBaseUseCase'

export interface IBaseOperation {
  useCase: IBaseUseCase
  run(httpRequest: IHttpRequest): Promise<IHttpResponse>
}
