const { DataTypes } = require('sequelize')
const Basemodel = require('./base')

class User extends Basemodel {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      { sequelize, tableName: 'users' },
    )
  }
}

module.exports = User
