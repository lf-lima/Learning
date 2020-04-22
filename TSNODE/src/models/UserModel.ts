import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Team from './TeamModel'

@Table
export default class User extends Model<User> {
    @Column
    name!: string

    @Column
    year!: number

    // declarando coluna da chave estrangeira referenciando ao Team que o User pertence
    @ForeignKey(() => Team)
    @Column
    teamId!: number

    // informando tipo de relacionamento
    @BelongsTo(() => Team)
    team!: Team

    @CreatedAt
    @Column
    createdAt!: Date

    @UpdatedAt
    @Column
    updatedAt!: Date
}
