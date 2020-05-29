import userRepository from '../repository/user'
import User from '../infra/models/user'

interface IUserDataBody {
  username: string
  email: string
  password: string
  confirmPassword: string
}

interface IUserData {
  username?: string
  email?: string
  password?: string
}

class UserService {
  public async store ({ username, email, password, confirmPassword }: IUserDataBody) {
    try {
      const user = new User()

      await user.validateUsername(username)
      await user.validateEmail(email)
      await user.validatePassword(password, confirmPassword)

      if (user.hasError) return user

      if (await userRepository.findByEmail(email)) user.addErrors('Email already exists')
      if (await userRepository.findByUsername(username)) user.addErrors('Username already exists')

      if (user.hasError) return user

      const data = {
        username,
        email,
        password
      }

      const responseRepository = await userRepository.store(data)
      return responseRepository
    } catch (error) {
      throw new Error(error)
    }
  }

  public async update (userId: number, { username, email, password, confirmPassword }: IUserDataBody) {
    try {
      const user = await userRepository.findById(userId) as User || new User()

      if (user.isEmpty()) {
        user.addErrors('User not exists')
        return user
      }

      const data: IUserData = {}

      if (username) { if (await user.validateUsername(username)) data.username = username }

      if (email) { if (await user.validateEmail(email)) data.email = email }

      if (password) { if (await user.validatePassword(password, confirmPassword)) data.password = password }

      if (user.hasError) return user

      const responseRepository = await userRepository.update(userId, data)
      return responseRepository
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findAll () {
    try {
      const responseRepository = await userRepository.findAll()
      return responseRepository
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findById (userId: number) {
    try {
      const user = await userRepository.findById(userId) ||
                   new User()

      if (user.isEmpty()) user.addErrors('User not exists')

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public async delete (userId: number) {
    try {
      const user = await userRepository.findById(userId) ||
                   new User()

      if (user.isEmpty()) {
        user.addErrors('User not exists')
        return user
      }

      await userRepository.delete(userId)

      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new UserService()
