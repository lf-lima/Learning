export interface ICreateUserDTO {
  email: string,
  password: string
}

export class CreateUserDTO implements ICreateUserDTO {
  public email!: string
  public password!: string

  constructor (obj: Partial<CreateUserDTO>) {
    Object.assign(this, obj)
  }
}

// ===============================

export interface IFindUserByEmailDTO {
  email: string
}

export class FindUserByEmailDTO implements IFindUserByEmailDTO {
  public email!: string

  constructor (obj: Partial<FindUserByEmailDTO>) {
    Object.assign(this, obj)
  }
}
