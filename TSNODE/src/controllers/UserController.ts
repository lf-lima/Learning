import { Request, Response } from 'express'
import User from '../models/UserModel'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.send('USERS')
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create({ name: 'Luiz' })

    return res.json(user)
  }
}

export default new UserController()
