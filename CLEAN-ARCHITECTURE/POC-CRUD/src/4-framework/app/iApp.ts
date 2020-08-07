import { IBaseServer } from '../server/base/iBaseServer'
import { IDBConnection } from '../database/base/iConnection'

export interface IApp {
  server: IBaseServer,
  dbConnection: IDBConnection
  database(): Promise<void>
}
