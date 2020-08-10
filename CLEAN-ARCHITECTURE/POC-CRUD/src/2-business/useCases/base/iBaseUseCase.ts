import { IHttpRequest } from '../../modules/helpers/httpRequest'
import { IHttpResponse } from '../../modules/helpers/httpResponse'
export interface IBaseUseCase {
  repository: any
  run(dto: any): Promise<any>
}
