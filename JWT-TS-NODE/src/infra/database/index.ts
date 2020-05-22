import { Sequelize } from 'sequelize-typescript'
import path from 'path'

const sequelize = new Sequelize({
  database: 'db_jwt_ts_node',
  host: 'localhost',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  storage: ':memory:',
  models: [path.resolve(__dirname, '..', 'models')],
  define: {
    underscored: true,
    timestamps: true
  }
})

export default sequelize
