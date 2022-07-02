import { FindUsers } from '../../../context/logIn/application'
import MongoUserRepository from '../../../context/logIn/infraestructure/database/persistence/mongo/MongoUserRepository'

const userRepository = new MongoUserRepository()

export default FindUsers(userRepository)
