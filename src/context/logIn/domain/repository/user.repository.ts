import { IUserEntity } from '../entities/user.entity'

export interface UserRepository {
  save: (user: IUserEntity) => Promise<IUserEntity>
}
