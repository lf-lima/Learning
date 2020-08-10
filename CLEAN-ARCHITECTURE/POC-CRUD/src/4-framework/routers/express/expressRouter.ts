import { Router } from 'express'
import { ExpressOperationAdapter, IExpressOperationAdapter } from '../../../3-gateway/operations/adapter/express/iExpressControllerAdapter'
import { IBaseRouter } from '../base/iBaseRouter'

export interface IExpressRouter extends IBaseRouter {
  router: Router
}

export class ExpressRouter implements IExpressRouter {
  public router!: Router
  public route!: string
  public operationAdapter!: IExpressOperationAdapter

  constructor (route: string) {
    this.route = route
    this.router = Router()
    this.operationAdapter = new ExpressOperationAdapter()
  }
}
