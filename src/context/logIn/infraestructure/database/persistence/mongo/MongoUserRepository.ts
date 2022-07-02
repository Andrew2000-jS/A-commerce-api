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

  public async findAll (): Promise<IUserEntity[]> {
    const users = await UserSchema.find()
    return users
  }

  public async findUser (id: string): Promise<IUserEntity> {
    const user = await UserSchema.findById(id)
    return user
  }

  public async delete (id: string): Promise<void> {
    await UserSchema.findByIdAndDelete(id)
  }

  // public async update(user: IUserEntity): Promise<IUserEntity> {}
}
