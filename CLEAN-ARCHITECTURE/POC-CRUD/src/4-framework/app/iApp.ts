import { IServer } from '../server/iServer'
import { IDBConnection } from '../database/connection'

export interface IApp {
  server: IServer,
  dbConnection: IDBConnection
  database(): Promise<void>
}
