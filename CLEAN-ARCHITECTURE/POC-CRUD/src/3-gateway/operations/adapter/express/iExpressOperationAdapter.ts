import { Request, Response } from 'express'
import { IBaseModel } from '../../../../1-domain/entities/iBaseModel'
import { IHttpResponseError } from '../../../modules/errors/http/httpReponseErrors'
import { HttpRequest } from '../../../modules/http/httpRequest'
import { IHttpResponse } from '../../../modules/http/httpResponse'
import { IBaseOperation } from '../../base/iBaseOperation'
import { IBaseOperationAdapter } from '../base/iBaseOperationAdapter'

export interface IExpressOperationAdapter<TRepository, TDTO>
  extends IBaseOperationAdapter<
    TRepository,
    TDTO,
    (req: Request, res: Response) => Promise<Response<IHttpResponse<IBaseModel | IHttpResponseError[]>>>
  > {
    adapt(operation: IBaseOperation<TRepository, TDTO>): (req: Request, res: Response) => Promise<
                                                                                            Response<
                                                                                              IHttpResponse<
                                                                                              IBaseModel | IHttpResponseError[]
                                                                                              >
                                                                                            >
                                                                                          >
}

export class ExpressOperationAdapter<TRepository, TDTO> implements IExpressOperationAdapter<TRepository, TDTO> {
  adapt (operation: IBaseOperation<TRepository, TDTO>) {
    return async (req: Request, res: Response): Promise<Response<IHttpResponse<IBaseModel | IHttpResponseError[]>>> => {
      const httpRequest = new HttpRequest({ body: req.body })
      const httpResponse = await operation.run(httpRequest)

      return res.status(httpResponse.statusCode).json(httpResponse)
    }
  }
}
