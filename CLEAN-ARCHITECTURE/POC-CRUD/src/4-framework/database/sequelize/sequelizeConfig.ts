import { SequelizeOptions } from 'sequelize-typescript'
import { baseSequelizeOptions } from '../../const/databaseConfigs'
import { IDBConfig } from '../base/iConfig'

export interface ISequelizeDBConfig extends IDBConfig {
  options: SequelizeOptions
}

class SequelizeDBConfig implements ISequelizeDBConfig {
  public options = baseSequelizeOptions
}

export class SequelizeMysqlConfig extends SequelizeDBConfig {
  constructor () {
    super()
    this.options.dialect = 'mysql'
  }
}
