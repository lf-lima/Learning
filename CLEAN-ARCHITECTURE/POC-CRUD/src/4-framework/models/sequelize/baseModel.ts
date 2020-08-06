import { IBaseModel } from '../../../1-domain/entities/iBaseModel'
import { Column, CreatedAt, Model, UpdatedAt } from 'sequelize-typescript'

export default class BaseModel<TModel> extends Model<TModel> implements IBaseModel {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  })
  id!: number

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
