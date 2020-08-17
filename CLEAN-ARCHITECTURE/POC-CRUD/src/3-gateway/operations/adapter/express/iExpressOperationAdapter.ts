import { Request, Response } from 'express'
import { IBaseModel } from '../../../../1-domain/entities/iBaseModel'
import { IHttpResponseError } from '../../../modules/errors/http/httpReponseErrors'
import { HttpRequest } from '../../../modules/http/httpRequest'
import { IHttpResponse } from '../../../modules/http/httpResponse'
import { IBaseOperation } from '../../base/iBaseOperation'
import { IBaseOperationAdapter } from '../base/iBaseOperationAdapter'

export interface IExpressOperationAdapter<TDTO, TReturnUseCase>
  extends IBaseOperationAdapter<
    TDTO,
    TReturnUseCase,
    (req: Request, res: Response) => Promise<Response<IHttpResponse<IBaseModel | IHttpResponseError[]>>>
  > {
    adapt(operation: IBaseOperation<TDTO, TReturnUseCase>): (req: Request, res: Response) => Promise<
                                                                                      Response<
                                                                                        IHttpResponse<
                                                                                          IBaseModel | IHttpResponseError[]
                                                                                        >
                                                                                      >
                                                                                    >
}

export class ExpressOperationAdapter<TDTO, TReturnUseCase> implements IExpressOperationAdapter<TDTO, TReturnUseCase> {
  adapt (operation: IBaseOperation<TDTO, TReturnUseCase>) {
    return async (req: Request, res: Response): Promise<Response<IHttpResponse<IBaseModel | IHttpResponseError[]>>> => {
      const httpRequest = new HttpRequest({ body: { ...req.body, ...req.params } })
      const httpResponse = await operation.run(httpRequest)

      return res.status(httpResponse.statusCode).json(httpResponse)
    }
  }
}
