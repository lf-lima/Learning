import { User } from '../../4-framework/models/user'

export interface IUserRepository {
  create(data: { email: string, password: string}): Promise<User>
  update(data: { email?: string, password?: string}): Promise<User>
  delete(): Promise<void>
  findById(userId: number): Promise<User>
  findAll(): Promise<User[]>
}
