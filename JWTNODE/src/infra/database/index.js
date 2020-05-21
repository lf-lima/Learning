const Sequelize = require('sequelize')
const dbConfig = require('../../config/database')
const userModel = require('../models/user')

class Database {
  constructor() {
    this.connection = new Sequelize(dbConfig)
    this.models = [userModel]
    this.init()
  }

  init() {
    this.models.map((model) => model.init(this.connection))
  }
}

module.exports = new Database()
