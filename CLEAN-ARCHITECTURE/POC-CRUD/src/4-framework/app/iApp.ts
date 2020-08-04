import { IServer } from '../server/iServer'

export interface IApp {
  server: IServer,
  database(): void
}
