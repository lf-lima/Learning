import { Sequelize } from 'sequelize-typescript'
import { IDBConfig } from './config'

export interface IDBConnection {
  config: IDBConfig
  connect(): Promise<void>
}

export class DBConnection implements IDBConnection {
  public config: IDBConfig

  constructor (config: IDBConfig) {
    this.config = config
  }

  public async connect (): Promise<void> {
    const sequelize = new Sequelize(this.config.options)

    await sequelize.sync({ force: true })
  }
}
