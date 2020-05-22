import userRepository from '../repository/user'

interface IUserData {
  username: string
  email: string
  password: string
}

class UserService {
  public async store ({ username, email, password }: IUserData) {
    // validar dados

    const data = {
      username,
      email,
      password
    }

    const responseRepository = await userRepository.store(data)
    return responseRepository
  }
}

export default new UserService()
