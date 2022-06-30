import UserSchema from '../../schemas/UserSchema'
import { IUserEntity } from '../../../../domain/entities/user.entity'
import { UserRepository } from '../../../../domain/repository/user.repository'

export default class MongoUserRepository implements UserRepository {
  public async save (user: IUserEntity): Promise<IUserEntity> {
    const newUser = {
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      password: user.password,
      mail: user.mail
    }

    const createUser = await UserSchema.create(newUser)
    const savedProduct = await createUser.save()
    return savedProduct
  }
}
