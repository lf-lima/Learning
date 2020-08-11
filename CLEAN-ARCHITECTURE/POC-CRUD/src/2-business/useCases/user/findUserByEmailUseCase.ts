import { IUser } from '../../../1-domain/entities/iUser'
import { IFindUserByEmailDTO } from '../../dto/user'
import { IUserRepository } from '../../repositories/iUserRepository'
import { IBaseUseCase } from '../base/iBaseUseCase'

export interface IFindUserByEmailUseCase extends IBaseUseCase {
  repository: IUserRepository
  run(dto: IFindUserByEmailDTO): Promise<IUser>
}

export class FindUserByEmailUseCase implements IFindUserByEmailUseCase {
  public repository!: IUserRepository

  constructor (repository: IUserRepository) {
    this.repository = repository
  }

  async run (dto: IFindUserByEmailDTO): Promise<IUser> {
    try {
      return await this.repository.findByEmail(dto.email)
    } catch (error) {
      throw new Error(error)
    }
  }
}
