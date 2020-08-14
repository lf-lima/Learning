import { IUser } from '../../../1-domain/entities/iUser'
import { IFindUserByEmailDTO } from '../../dto/user'
import { IUserRepository } from '../../repositories/iUserRepository'
import { IBaseUseCase } from '../base/iBaseUseCase'

export type IFindUserByEmailUseCase = IBaseUseCase<IUserRepository, IFindUserByEmailDTO, IUser>

export class FindUserByEmailUseCase implements IFindUserByEmailUseCase {
  public repository!: IUserRepository

  constructor (repo: IUserRepository) {
    this.repository = repo
  }

  async run (dto: IFindUserByEmailDTO): Promise<IUser> {
    try {
      return await this.repository.findByEmail(dto.email)
    } catch (error) {
      throw new Error(error)
    }
  }
}
