import { Request, Response } from 'express'
import { HttpRequest } from '../../../modules/http/httpRequest'
import { IHttpResponse } from '../../../modules/http/httpResponse'
import { IBaseOperation } from '../../base/iBaseOperation'
import { IBaseOperationAdapter } from '../base/iBaseOperationAdapter'

export interface IExpressOperationAdapter extends IBaseOperationAdapter {
  adapt(operation: IBaseOperation): (req: Request, res: Response) => Promise<Response<IHttpResponse>>
}

export class ExpressOperationAdapter implements IExpressOperationAdapter {
  adapt (operation: IBaseOperation) {
    return async (req: Request, res: Response): Promise<Response<IHttpResponse>> => {
      const httpRequest = new HttpRequest({ body: req.body })
      const httpResponse = await operation.run(httpRequest)

      return res.status(httpResponse.statusCode).json(httpResponse)
    }
  }
}
