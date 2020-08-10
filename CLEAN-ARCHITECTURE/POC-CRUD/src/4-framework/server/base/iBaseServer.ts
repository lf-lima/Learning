import { IMainRouter } from '../../routers/base/iMainRouter'

export interface IBaseServer {
  app: any,
  mainRouter: IMainRouter
  connection(): void
  routes(): void
  middlewares(): void
}
