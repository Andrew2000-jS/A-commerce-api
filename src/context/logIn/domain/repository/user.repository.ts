import { IUserEntity } from '../entities/user.entity'

export interface UserRepository {
  save: (user: IUserEntity) => Promise<IUserEntity>
  update: (user: IUserEntity) => Promise<IUserEntity>
  findAll: () => Promise<IUserEntity[]>
  findUser: (username: string) => Promise<IUserEntity>
  delete: (id: string) => Promise<void>
}
