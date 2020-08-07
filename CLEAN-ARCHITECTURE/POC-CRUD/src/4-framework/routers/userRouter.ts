import { Request, Response, Router } from 'express'
import User from '../models/sequelize/user.model'
import { UserRepository } from '../repositories/userRepository'
import { ExpressRouter } from './express/expressRouter'

export class UserRouter extends ExpressRouter {
  public router!: Router
  public route!: string

  constructor () {
    super('/user')

    this.router.post('/', async (req: Request, res: Response) => {
      return res.status(200).json({ user: await new UserRepository(User).create({ email: 'luiz@g.com', password: '123' }) })
    })
  }
}
