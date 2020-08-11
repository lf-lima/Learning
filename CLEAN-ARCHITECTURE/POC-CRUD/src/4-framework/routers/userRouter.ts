import { CreateUserUseCase } from '../../2-business/useCases/user/createUserUseCase'
import { FindUserByEmailUseCase } from '../../2-business/useCases/user/findUserByEmailUseCase'
import { CreateUserOperation } from '../../3-gateway/operations/user/createUserOperation'
import User from '../models/sequelize/user.model'
import { UserRepository } from '../repositories/userRepository'
import { ExpressRouter } from './express/expressRouter'

export class UserRouter extends ExpressRouter {
  constructor () {
    super('/user')

    this.router.post('/', this.operationAdapter.adapt(
      new CreateUserOperation(
        new CreateUserUseCase(new UserRepository(User)),
        new FindUserByEmailUseCase(new UserRepository(User))
      )
    )
    )
  }
}
