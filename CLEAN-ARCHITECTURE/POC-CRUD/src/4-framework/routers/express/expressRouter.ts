import { Router } from 'express'
import { IBaseRouter } from '../base/iBaseRouter'

export interface IExpressRouter extends IBaseRouter {
  router: Router
}

export class ExpressRouter implements IExpressRouter {
  public router!: Router
  public route!: string

  constructor (route: string) {
    this.route = route
    this.router = Router()
  }
}
