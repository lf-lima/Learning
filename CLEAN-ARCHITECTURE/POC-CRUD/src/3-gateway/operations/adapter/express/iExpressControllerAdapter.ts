import { Request, Response } from 'express'
import { HttpRequest } from '../../../../2-business/modules/helpers/httpRequest'
import { IHttpResponse } from '../../../../2-business/modules/helpers/httpResponse'
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
