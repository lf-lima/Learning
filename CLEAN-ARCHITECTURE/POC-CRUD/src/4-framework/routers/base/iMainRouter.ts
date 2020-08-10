import { IBaseRouter } from '../base/iBaseRouter'

export interface IMainRouter {
  router: any
  routers: IBaseRouter[]
  routing(): void
}
