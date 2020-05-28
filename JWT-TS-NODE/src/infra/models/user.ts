import { Table, Column, DefaultScope } from 'sequelize-typescript'
import BaseModel from './base'
import validator from 'validator'

@DefaultScope({
  attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
})
@Table
class User extends BaseModel<User> {
  @Column
  username!: string

  @Column
  email!: string

  @Column
  password!: string

  public async validateEmail (email: string): Promise<boolean> {
    if (!validator.isEmail(email)) this.addErrors('Invalid Email')

    if (this.hasError) return true

    return false
  }

  public async validateUsername (username: string): Promise<boolean> {
    if (username.length <= 4) this.addErrors('Username too short')

    if (username.length > 16) this.addErrors('Username too long')

    if (this.hasError) return false

    return true
  }

  public async validatePassword (password: string, confirmPassword: string): Promise<boolean> {
    if (password !== confirmPassword) this.addErrors('Different passwords')

    if (password.length < 4) this.addErrors('Password too short')

    if (password.length > 16) this.addErrors('Password too long')

    if (this.hasError) return false

    return true
  }
}

export default User
