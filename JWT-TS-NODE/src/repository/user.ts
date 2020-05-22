import userModel from '../infra/models/user'

interface IUserData {
  username: string
  email: string
  password: string
}

class UserRepository {
  public async store (data: IUserData) {
    try {
      const user = await userModel.create(data)
      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new UserRepository()
