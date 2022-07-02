import { IUserEntity } from '../domain/entities/user.entity'
import { UserRepository } from '../domain/repository/user.repository'

const UpdateUser = (UserRepo: UserRepository) => async (user: IUserEntity): Promise<IUserEntity> => {
  const savedUser = await UserRepo.update(user)
  return savedUser
}

export default UpdateUser
