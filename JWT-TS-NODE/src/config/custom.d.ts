interface ITokenPayload {
  id: number
  username: string
  email: string
}

declare namespace Express {
  export interface Request {
     user: ITokenPayload
  }
}
