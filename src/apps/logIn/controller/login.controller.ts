import { Request, Response } from 'express'
import { FindUser } from '../dependency-injection'
import Role from '../../shared/Role'
import bcrypt from 'bcrypt'

export const logInController = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body
  const user = await FindUser(username)
  const passwordToCompare = await bcrypt.compare(password, user.password)

  const forToken = { user: user.username, role: user.role }
  const token = Role(forToken)

  if (!(user && passwordToCompare)) {
    res.status(401).json({
      error: 'invalid user or password'
    })
  } else {
    res.json({ token }).status(200)
  }
}
