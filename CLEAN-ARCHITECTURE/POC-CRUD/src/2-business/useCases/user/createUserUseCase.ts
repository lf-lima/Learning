import { IUser } from '../../../1-domain/entities/iUser'
import { ICreateUserDTO } from '../../dto/user'
import { IUserRepository } from '../../repositories/iUserRepository'
import { IBaseUseCase } from '../base/iBaseUseCase'

export type ICreateUserUseCase = IBaseUseCase<ICreateUserDTO, IUser>

export class CreateUserUseCase implements ICreateUserUseCase {
  readonly repository!: IUserRepository

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
