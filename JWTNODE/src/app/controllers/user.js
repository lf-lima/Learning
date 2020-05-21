const UserModel = require('../../infra/models/user')

module.exports = {
  async store(req, res) {
    try {
      const { username, email, password } = req.body

      const data = {
        username,
        email,
        password,
      }

      const user = await UserModel.create(data)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({ error: 'Server Internal Error' })
    }
  },
}
