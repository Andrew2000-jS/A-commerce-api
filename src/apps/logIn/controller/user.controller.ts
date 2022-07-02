import { Request, Response } from 'express'
import { UserCreator, FindUsers, FindUser } from '../dependency-injection'

export const findUsersController = async (_req: Request, res: Response): Promise<void> => {
  const users = await FindUsers()
  res.json({ users }).status(200)
}

export const findUserController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const user = await FindUser(id)
  res.json({ user }).status(200)
}

export const createUserController = async (req: Request, res: Response): Promise<void> => {
  const { body } = req
  const user = UserCreator(body)

  res.json({ user }).status(201)
}
