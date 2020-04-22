import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Team from './TeamModel'

@Table
export default class User extends Model<User> {
    @Column
    name!: string

    @Column
    year!: number

    @ForeignKey(() => Team)
    @Column
    teamId!: number

    @BelongsTo(() => Team)
    team!: Team

    @CreatedAt
    @Column
    createdAt!: Date

    @UpdatedAt
    @Column
    updatedAt!: Date
}
