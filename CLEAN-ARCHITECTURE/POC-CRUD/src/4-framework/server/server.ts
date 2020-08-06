import { App } from '../app/app'
import { ServerExpress } from './iServer'
import { SequelizeConnection } from '../database/sequelize/connection'
import { SequelizeMysqlConfig } from '../database/sequelize/config'

const app = new App(new ServerExpress(), new SequelizeConnection(new SequelizeMysqlConfig()))

app.server.connection()
