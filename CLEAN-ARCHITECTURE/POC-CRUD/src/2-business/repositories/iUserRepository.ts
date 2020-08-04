import User from '../../4-framework/models/user'

export interface IUserRepository {
  create(): Promise<User>
  update(): Promise<User>
  delete(): Promise<void>
  findById(): Promise<User>
  findAll(): Promise<User[]>
}
