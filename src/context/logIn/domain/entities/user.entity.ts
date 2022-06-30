import { ObjectId } from 'mongoose'

export interface IUserEntity {
  id: ObjectId
  name: string
  lastname: string
  username: string
  password: number
  mail: string
  isAdmin: boolean
}
