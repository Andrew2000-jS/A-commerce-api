import { IUserEntity } from '../domain/entities/user.entity'
import { UserRepository } from '../domain/repository/user.repository'

const FindUser = (userRepo: UserRepository) => async (username: string): Promise<IUserEntity> => {
  const user = await userRepo.findUser(username)
  return user
}

export default FindUser
