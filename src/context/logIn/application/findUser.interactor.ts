import { IUserEntity } from '../domain/entities/user.entity'
import { UserRepository } from '../domain/repository/user.repository'

const FindUser = (userRepo: UserRepository) => async (id: string): Promise<IUserEntity> => {
  const user = await userRepo.findUser(id)
  return user
}

export default FindUser
