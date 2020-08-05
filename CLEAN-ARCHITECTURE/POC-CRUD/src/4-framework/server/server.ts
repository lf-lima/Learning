import { App } from '../app/app'
import { ServerExpress } from './iServer'
import { DBConnection } from '../database/connection'
import { MysqlConfig } from '../database/config'
console.log(new DBConnection(new MysqlConfig()))

const app = new App(new ServerExpress(), new DBConnection(new MysqlConfig()))

app.server.connection()
