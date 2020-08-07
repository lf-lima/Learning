import { IApp } from './iApp'
import { IBaseServer } from '../server/base/iBaseServer'
import { IDBConnection } from '../database/base/iConnection'

export class App implements IApp {
  public server: IBaseServer
  public dbConnection: IDBConnection

  constructor (server: IBaseServer, dbConnection: IDBConnection) {
    this.server = server
    this.dbConnection = dbConnection
    this.database()
  }

  async database (): Promise<void> {
    await this.dbConnection.connect()
  }
}
