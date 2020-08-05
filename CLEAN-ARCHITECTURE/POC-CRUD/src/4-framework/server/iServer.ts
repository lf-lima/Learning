import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const port = 3333

export interface IServer {
  app: any,
  connection(): void
  routes(): void
  middlewares(): void
}

export interface IServerExpress extends IServer{
  app: express.Application
}

export class ServerExpress implements IServerExpress {
  public app: express.Application

  constructor () {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  public connection (): void {
    this.app.listen(port, () => {
      console.log('SERVER ON')
      console.log(`Listen in http://localhost:${port}`)
    })
  }

  public middlewares (): void {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cors())
    this.app.use(express.json())
  }

  public routes (): void {
    console.log('routes')
  }
}
