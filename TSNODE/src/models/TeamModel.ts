import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript'
import User from './UserModel'

// declarando a tabela
@Table
// exportando por default a classe
export default class Team extends Model<Team> {
    // declarando uma coluna na tabela
    @Column
    // nome e tipo da coluna
    // obs:
    // '!:' => cria um label no banco como null se nao for informado no constructor
    // '?:' => nao cria um label no banco se nao for informado no constructor
    name!: string

    @Column
    project?: string

    // informando o tipo de relacionamento que existe com essa tabela
    @HasMany(() => User)
    users!: User[]

    @CreatedAt
    @Column
    createdAt!: Date

    @UpdatedAt
    @Column
    updatedAt!: Date
}
