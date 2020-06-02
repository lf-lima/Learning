import User from '../infra/models/user'

interface IUserData {
  username?: string
  email?: string
  password?: string
}

interface IFindUserOptions {
  returnPassword?: boolean
}

class UserRepository {
  public async store (data: IUserData) {
    try {
      const userCreated = await User.create(data)
      const user = await this.findById(userCreated.id, { returnPassword: false })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async update (userId: number, data: IUserData) {
    try {
      await User.update(data, { where: { id: userId } })
      const user = await this.findById(userId, { returnPassword: false })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findByEmail (email: string, options?: IFindUserOptions) {
    try {
      let user = new User()
      if (options) {
        if (!options.returnPassword) {
          user = await User.findOne({
            where: { email },
            attributes: { exclude: ['password'] }
          }) as User
        }
      } else {
        user = await User.findOne({ where: { email } }) as User
      }

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findByUsername (username: string, options?: IFindUserOptions) {
    try {
      let user = new User()
      if (options) {
        if (!options.returnPassword) {
          user = await User.findOne({
            where: { username },
            attributes: { exclude: ['password'] }
          }) as User
        }
      } else {
        user = await User.findOne({ where: { username } }) as User
      }

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findById (userId: number, options?: IFindUserOptions) {
    try {
      let user = new User()
      if (options) {
        if (!options.returnPassword) {
          user = await User.findOne({
            where: { id: userId },
            attributes: { exclude: ['password'] }
          }) as User
        }
      } else {
        user = await User.findOne({ where: { id: userId } }) as User
      }

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findAll (options?: IFindUserOptions) {
    try {
      let users: User[] = []
      if (options) {
        if (!options.returnPassword) {
          users = await User.findAll({
            attributes: { exclude: ['password'] }
          }) as User[]
        }
      } else {
        users = await User.findAll() as User[]
      }

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
