import { IMainRouter } from '../../routers/mainRouter'

export interface IBaseServer {
  app: any,
  mainRouter: IMainRouter
  connection(): void
  routes(): void
  middlewares(): void
}
