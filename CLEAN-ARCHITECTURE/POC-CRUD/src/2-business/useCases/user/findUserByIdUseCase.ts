import { IUser } from '../../../1-domain/entities/iUser'
import { IFindUserByIdDTO } from '../../dto/user'
import { IUserRepository } from '../../repositories/iUserRepository'
import { IBaseUseCase } from '../base/iBaseUseCase'

export type IFindUserByIdUseCase = IBaseUseCase<IFindUserByIdDTO, IUser>

export class FindUserByIdUseCase implements IFindUserByIdUseCase {
  public repository!: IUserRepository

  constructor (repo: IUserRepository) {
    this.repository = repo
  }

  async run (dto: IFindUserByIdDTO): Promise<IUser> {
    try {
      return await this.repository.findById(dto.userId)
    } catch (error) {
      throw new Error(error)
    }
  }
}
