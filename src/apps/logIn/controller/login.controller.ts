import { Request, Response } from 'express'
import { FindUser } from '../dependency-injection'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const logInController = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body
  const user = await FindUser(username)
  const passwordToCompare = await bcrypt.compare(password, user.password)
  const forToken = user.id

  const token = jwt.sign({ forToken }, process.env.SECRET, { expiresIn: '24h' })

  if (!(user && passwordToCompare)) {
    res.status(401).json({
      error: 'invalid user or password'
    })
  } else {
    res.json({ token }).status(200)
  }
}
