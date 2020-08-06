import { IApp } from './iApp'
import { IServer } from '../server/iServer'
import { IDBConnection } from '../database/base/iConnection'

export class App implements IApp {
  public server: IServer
  public dbConnection: IDBConnection

  constructor (server: IServer, dbConnection: IDBConnection) {
    this.server = server
    this.dbConnection = dbConnection
    this.database()
  }

  async database (): Promise<void> {
    await this.dbConnection.connect()
  }
}
