import { IHttpRequest } from '../../modules/http/httpRequest'
import { IHttpResponse } from '../../modules/http/httpResponse'
import { IBaseUseCase } from '../../../2-business/useCases/base/iBaseUseCase'

export interface IBaseOperation {
  useCase: IBaseUseCase
  run(httpRequest: IHttpRequest): Promise<IHttpResponse>
}
