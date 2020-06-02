import userRepository from '../repository/user'
import User from '../infra/models/user'

interface ILoginData {
  username?: string
  email?: string
  password: string
}

interface ILoginResponse {
  auth: boolean
  errors?: string[]
  token?: string
}

class LoginService {
  public async authenticate ({ username, email, password }: ILoginData): Promise<ILoginResponse> {
    let user = new User()

    if (username) user = await userRepository.findByUsername(username) || new User()

    if (email) user = await userRepository.findByEmail(email) || new User()

    if (user.isEmpty()) {
      user.addErrors('User not exists')
      return { auth: false, errors: user.getErrors() }
    }

    await user.checkPassword(password, user.password)

    if (user.hasError) return { auth: false, errors: user.getErrors() }

    const token = await user.genToken({ username: user.username, email: user.email })

    return { auth: true, token }
  }
}

export default new LoginService()
