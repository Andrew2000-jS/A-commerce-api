import { Request, Response, NextFunction } from 'express'
import { UserCreator, FindUsers, DeleteUser, UpdateUser } from '../dependency-injection'

export const findUsersController = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await FindUsers()
    res.json({ users }).status(200)
  } catch (error) {
    next(error)
  }
}

export const createUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { body } = req
    const user = UserCreator(body)
    res.json({ user }).status(201)
  } catch (error) {
    next(error)
  }
}

export const deleteUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params
    const deletedUser = await DeleteUser(id)

    res.json({ deletedUser }).status(204)
  } catch (error) {
    next(error)
  }
}

export const updateUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { body } = req
    const { id } = req.params
    const updatedUser = await UpdateUser({ id, ...body })
    res.json({ updatedUser }).status(202)
  } catch (error) {
    next(error)
  }
}
