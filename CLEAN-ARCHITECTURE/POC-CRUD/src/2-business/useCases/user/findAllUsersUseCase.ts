import { IUser } from '../../../1-domain/entities/iUser'
import { IUserRepository } from '../../repositories/iUserRepository'
import { IBaseUseCase } from '../base/iBaseUseCase'

export type IFindAllUsersUseCase = IBaseUseCase<undefined, IUser[]>

export class FindAllUsersUseCase implements IFindAllUsersUseCase {
  public repository!: IUserRepository

  constructor (repo: IUserRepository) {
    this.repository = repo
  }

  async run (dto: undefined): Promise<IUser[]> {
    try {
      return this.repository.findAll()
    } catch (error) {
      throw new Error(error)
    }
  }
}
