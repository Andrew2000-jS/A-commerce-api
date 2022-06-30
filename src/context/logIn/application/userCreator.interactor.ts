import { IUserEntity } from '../domain/entities/user.entity'
import { UserRepository } from '../domain/repository/user.repository'

const UserCreator = (UserRepo: UserRepository) => async (user: IUserEntity): Promise<IUserEntity> => {
  const newUser = {
    id: user.id,
    name: user.name,
    lastname: user.lastname,
    username: user.username,
    password: user.password,
    mail: user.mail,
    isAdmin: false
  }

  const savedUser = await UserRepo.save(newUser)
  return savedUser
}

export default UserCreator
