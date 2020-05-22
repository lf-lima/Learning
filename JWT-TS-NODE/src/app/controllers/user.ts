import { Request, Response } from 'express'
import userService from '../../service/user'

class UserController {
  public async store (req: Request, res: Response) {
    try {
      const { username, email, password } = req.body

      const data = {
        username,
        email,
        password
      }

      const user = await userService.store(data)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({ error: 'Server Internal Error' })
    }
  }
}

export default new UserController()
