import { CreateUserUseCase } from '../../2-business/useCases/user/createUserUseCase'
import { FindUserByEmailUseCase } from '../../2-business/useCases/user/findUserByEmailUseCase'
import { FindUserByIdUseCase } from '../../2-business/useCases/user/findUserByIdUseCase'
import { UpdateUserUseCase } from '../../2-business/useCases/user/updateUserUseCase'
import { ExpressOperationAdapter } from '../../3-gateway/operations/adapter/express/iExpressOperationAdapter'
import { CreateUserOperation } from '../../3-gateway/operations/user/createUserOperation'
import { UpdateUserOperation } from '../../3-gateway/operations/user/updateUserOperation'
import User from '../models/sequelize/user.model'
import { UserRepository } from '../repositories/userRepository'
import { ExpressRouter } from './express/expressRouter'

export class UserRouter extends ExpressRouter {
  constructor () {
    super('/user')

    this.router.post('/', new ExpressOperationAdapter().adapt(
      new CreateUserOperation(
        new CreateUserUseCase(new UserRepository(User)),
        new FindUserByEmailUseCase(new UserRepository(User))
      )
    )
    )

    this.router.put('/:userId', new ExpressOperationAdapter().adapt(
      new UpdateUserOperation(
        new UpdateUserUseCase(new UserRepository(User)),
        new FindUserByEmailUseCase(new UserRepository(User)),
        new FindUserByIdUseCase(new UserRepository(User))
      )
    )
    )
  }
}
