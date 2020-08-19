import { IHttpRequest } from '../../modules/http/httpRequest'
import { IHttpResponse } from '../../modules/http/httpResponse'
import { IHttpResponseError } from '../../modules/errors/http/httpReponseErrors'

export interface IBaseOperation<IInput, TReturnUseCase> {
  run(httpRequest: IHttpRequest<IInput>): Promise<IHttpResponse<TReturnUseCase | IHttpResponseError[]>>
}
