import { SequelizeOptions } from 'sequelize-typescript'
import path from 'path'
import { config } from 'dotenv'
config()

const baseOptions = {
  database: process.env.DB,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  storage: ':memory:',
  models: [path.resolve(__dirname, '..', 'models', '*.ts')]
}

export interface IDBConfig {
  options: SequelizeOptions
}

class DBConfig implements IDBConfig {
  public options: SequelizeOptions = baseOptions
}

export class MysqlConfig extends DBConfig {
  public options!: SequelizeOptions

  constructor () {
    super()
    this.options.dialect = 'mysql'
  }
}
