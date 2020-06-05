import { Request, Response, NextFunction } from 'express'
import authConfig from '../../config/auth'
import jwt from 'jsonwebtoken'

interface ITokenPayload {
  id: number
  username: string
  email: string
}

export default (req: Request, res: Response, next: NextFunction): Response | void => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const parts = authHeader?.split(' ') as string[]

  if (parts.length !== 2) {
    return res.status(401).json({ error: 'Token error' })
  }

  const [scheme, token] = parts

  if (scheme !== 'Bearer') {
    return res.status(401).json({ error: 'Token malformatted' })
  }

  const tokenParts = token.split('.') as string[]

  if (tokenParts.length !== 3) {
    return res.status(401).json({ error: 'Token malformatted' })
  }

  const payload = jwt.verify(token, authConfig.secret) as ITokenPayload

  req.user = payload

  return next()
}
