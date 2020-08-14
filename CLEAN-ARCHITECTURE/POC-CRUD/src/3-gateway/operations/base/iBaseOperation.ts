import { IHttpRequest } from '../../modules/http/httpRequest'
import { IHttpResponse } from '../../modules/http/httpResponse'
import { IBaseUseCase } from '../../../2-business/useCases/base/iBaseUseCase'
import { IBaseModel } from '../../../1-domain/entities/iBaseModel'
import { IHttpResponseError } from '../../modules/errors/http/httpReponseErrors'

export interface IBaseOperation<TRepository, TDTO> {
  useCase: IBaseUseCase<TRepository, TDTO, IBaseModel>
  run(httpRequest: IHttpRequest<TDTO>): Promise<IHttpResponse<IBaseModel | IHttpResponseError[]>>
}
