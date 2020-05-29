import User from '../infra/models/user'

interface IUserData {
  username?: string
  email?: string
  password?: string
}

class UserRepository {
  public async store (data: IUserData) {
    try {
      const userCreated = await User.create(data)
      const user = await this.findById(userCreated.id) // as User para o Objeto ser somento do tipo User
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async update (userId: number, data: IUserData) {
    try {
      await User.update(data, { where: { id: userId } })
      const user = await this.findById(userId)
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findByEmail (email: string) {
    try {
      const user = await User.findOne({ where: { email } }) as User
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findByUsername (username: string) {
    try {
      const user = await User.findOne({ where: { username } }) as User
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findById (userId: number) {
    try {
      const user = await User.findByPk(userId) as User
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findAll () {
    try {
      const users = await User.findAll()
      return users
    } catch (error) {
      throw new Error(error)
    }
  }

  public async delete (userId: number) {
    try {
      await User.destroy({ where: { id: userId } })
      return
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new UserRepository()
