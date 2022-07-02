import { UserRepository } from '../domain/repository/user.repository'

const deleteUser = (userRepo: UserRepository) => async (id: string): Promise<void> => await userRepo.delete(id)

export default deleteUser
