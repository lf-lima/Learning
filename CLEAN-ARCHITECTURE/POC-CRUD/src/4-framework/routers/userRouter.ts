import { Router } from 'express'
import { CreateUserUseCase } from '../../2-business/useCases/user/createUserUseCase'
import { IBaseOperationAdapter } from '../../3-gateway/operations/adapter/base/iBaseOperationAdapter'
import { CreateUserOperation } from '../../3-gateway/operations/user/createUserOperation'
import User from '../models/sequelize/user.model'
import { UserRepository } from '../repositories/userRepository'
import { ExpressRouter } from './express/expressRouter'

export class UserRouter extends ExpressRouter {
  public router!: Router
  public route!: string
  public operationAdapter!: IBaseOperationAdapter

  constructor () {
    super('/user')

    this.router.post('/', this.operationAdapter.adapt(
      new CreateUserOperation(new CreateUserUseCase(new UserRepository(User))))
    )
  }
}
