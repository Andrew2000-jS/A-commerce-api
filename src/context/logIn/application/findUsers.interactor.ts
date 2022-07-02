import { IUserEntity } from '../domain/entities/user.entity'
import { UserRepository } from '../domain/repository/user.repository'

const FindUsers = (userRepo: UserRepository) => async (): Promise<IUserEntity[]> => {
  const users = await userRepo.findAll()
  return users
}

export default FindUsers
