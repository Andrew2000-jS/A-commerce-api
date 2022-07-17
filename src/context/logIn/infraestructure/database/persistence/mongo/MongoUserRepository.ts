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
      mail: user.mail,
      role: user.role
    }

    const createUser = await UserSchema.create(newUser)
    const savedUser = await createUser.save()

    return savedUser
  }

  public async findAll (): Promise<IUserEntity[]> {
    const users = await UserSchema.find()
    return users
  }

  public async findUser (username: string): Promise<IUserEntity> {
    const user = await UserSchema.findOne({ username })
    return user
  }

  public async delete (id: string): Promise<void> {
    await UserSchema.findByIdAndDelete(id)
  }

  public async update (user: IUserEntity): Promise<IUserEntity> {
    const updatedUser = await UserSchema.findByIdAndUpdate(user.id, { $set: user })
    return updatedUser
  }
}
