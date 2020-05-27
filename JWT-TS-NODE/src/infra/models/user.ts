import { Table, Column } from 'sequelize-typescript'
import BaseModel from './base'

@Table
class User extends BaseModel<User> {
  @Column
  username!: string

  @Column
  email!: string

  @Column
  password!: string
}

export default User
