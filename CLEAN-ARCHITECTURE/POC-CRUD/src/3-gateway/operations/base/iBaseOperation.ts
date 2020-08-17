import { IHttpRequest } from '../../modules/http/httpRequest'
import { IHttpResponse } from '../../modules/http/httpResponse'
import { IBaseUseCase } from '../../../2-business/useCases/base/iBaseUseCase'
import { IHttpResponseError } from '../../modules/errors/http/httpReponseErrors'

export interface IBaseOperation<TDTO, TReturnUseCase> {
  useCase: IBaseUseCase<TDTO, TReturnUseCase>
  run(httpRequest: IHttpRequest<TDTO>): Promise<IHttpResponse<TReturnUseCase | IHttpResponseError[]>>
}
