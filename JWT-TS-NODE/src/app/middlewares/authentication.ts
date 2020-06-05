import { Request, Response, NextFunction } from 'express'
import authConfig from '../../config/auth'
import jwt from 'jsonwebtoken'

interface ITokenPayload {
  id: number
  username: string
  email: string
}

export default (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization
  console.log(authHeader)

  const parts = authHeader?.split('') as string[]

  const scheme = parts[0]
  const token = parts[1]

  const decoded = jwt.verify(token, authConfig.secret)

  req.user = decoded

  next()
}
