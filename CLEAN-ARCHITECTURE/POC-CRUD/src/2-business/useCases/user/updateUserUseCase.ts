import { IUser } from '../../../1-domain/entities/iUser'
import { IUpdateUserDTO } from '../../dto/user'
import { IUserRepository } from '../../repositories/iUserRepository'
import { IBaseUseCase } from '../base/iBaseUseCase'

export type IUpdateUserUseCase = IBaseUseCase<IUpdateUserDTO, IUser>

export class UpdateUserUseCase implements IUpdateUserUseCase {
  public repository!: IUserRepository

  constructor (repo: IUserRepository) {
    this.repository = repo
  }

  async run (dto: IUpdateUserDTO): Promise<IUser> {
    try {
      await this.repository.update(dto.userId, {
        email: dto.email, password: dto.password
      })

      return this.repository.findById(dto.userId)
    } catch (error) {
      throw new Error(error)
    }
  }
}
