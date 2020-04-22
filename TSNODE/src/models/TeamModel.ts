import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript'
import User from './UserModel'

@Table
export default class Team extends Model<Team> {
    @Column
    name!: string

    @Column
    project?: string

    @HasMany(() => User)
    users!: User[]

    @CreatedAt
    @Column
    createdAt!: Date

    @UpdatedAt
    @Column
    updatedAt!: Date
}
