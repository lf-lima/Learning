import { Sequelize } from 'sequelize-typescript'
import path from 'path'

const sequelize = new Sequelize({
  database: 'DB_app',
  host: '127.0.0.1',
  dialect: 'mysql',
  username: 'root',
  password: 'T05_1c2_26T',
  storage: ':memory:',
  models: [path.resolve(__dirname, 'models')]
})

export default sequelize
