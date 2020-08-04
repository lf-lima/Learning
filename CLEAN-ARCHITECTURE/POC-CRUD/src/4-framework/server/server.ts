import { App } from '../app/app'
import { ServerExpress } from './iServer'

const app = new App(new ServerExpress())

app.server.connection()
