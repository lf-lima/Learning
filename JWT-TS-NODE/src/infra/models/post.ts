import { Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript'
import BaseModel from './base'
import User from './user'

@Table
export default class Post extends BaseModel<Post> {
  @Column
  title!: string

  @Column
  description!: string

  @ForeignKey(() => User)
  @Column
  userId!: number

  @BelongsTo(() => User)
  user!: User
}
