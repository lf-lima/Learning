import { IServer } from '../server/iServer'
import { IDBConnection } from '../database/base/iConnection'

export interface IApp {
  server: IServer,
  dbConnection: IDBConnection
  database(): Promise<void>
}
