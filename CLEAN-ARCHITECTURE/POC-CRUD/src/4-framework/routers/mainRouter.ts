import { Router } from 'express'
import { routers } from '../const/routers'
import { IBaseRouter } from './base/iBaseRouter'

export interface IMainRouter {
  router: any
  routers: IBaseRouter[]
  routing(): void
}

export interface IMainExpressRouter extends IMainRouter {
  router: Router
}

export class MainExpressRouter implements IMainExpressRouter {
  public router!: Router
  public routers!: IBaseRouter[]

  constructor () {
    this.router = Router()
    this.routers = routers
  }

  routing (): void {
    for (const currentRouter of this.routers) {
      this.router.use(currentRouter.route, currentRouter.router)
    }
  }
}
