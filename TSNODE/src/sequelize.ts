import { Sequelize } from 'sequelize-typescript'
import path from 'path'

const sequelize = new Sequelize({
  database: 'db_tsnode',
  host: 'localhost',
  dialect: 'postgres',
  username: 'postgres',
  password: 'admin',
  storage: ':memory:',
  models: [path.resolve(__dirname, 'models')]
})

export default sequelize
