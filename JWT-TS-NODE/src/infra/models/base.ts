import { Model, CreatedAt, UpdatedAt, Column, DefaultScope } from 'sequelize-typescript'

export default class BaseModel<TModel> extends Model<TModel> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  })
  id!: number

  private errors: string[] = []

  public async getErrors (): Promise<string[]> {
    return this.errors
  }

  public async addErrors (err: string): Promise<void> {
    this.errors.push(err)
  }

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
