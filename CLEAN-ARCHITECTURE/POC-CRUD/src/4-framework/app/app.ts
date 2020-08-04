import { IApp } from './iApp'
import { IServer } from '../server/iServer'

export class App implements IApp {
  public server: IServer

  constructor (server: IServer) {
    this.server = server

    this.database()
  }

  public database (): void {
    console.log('database')
  }
}
