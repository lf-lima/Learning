import { IUser } from '../../../1-domain/entities/iUser'
import { ICreateUserDTO } from '../../dto/user'
import { IUserRepository } from '../../repositories/iUserRepository'
import { IBaseUseCase } from '../base/iBaseUseCase'

export interface ICreateUserUseCase extends IBaseUseCase {
  repository: IUserRepository
  run(dto: ICreateUserDTO): Promise<IUser>
}

export class CreateUserUseCase implements ICreateUserUseCase {
  public repository!: IUserRepository

  constructor (repo: IUserRepository) {
    this.repository = repo
  }

  async run (dto: ICreateUserDTO): Promise<IUser> {
    try {
      return await this.repository.create(dto)
    } catch (error) {
      throw new Error(error)
    }
  }
}
