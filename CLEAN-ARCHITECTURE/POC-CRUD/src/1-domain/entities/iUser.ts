import { IBaseModel } from './iBaseModel'

export interface IUser extends IBaseModel{
  email: string,
  password: string
}
