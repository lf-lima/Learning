import { Column, Table, Model } from 'sequelize-typescript'
import { IUser } from '../../1-domain/entities/iUser'

@Table
export default class User extends Model<User> implements IUser {
  @Column
  email!: string

  @Column
  password!: string
}
