import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { FindUser } from '../logIn/dependency-injection'

interface JwtPayload {
  forToken: [key: string]
}
export const verifyToken = (req: Request, res: Response, next: NextFunction): any => {
  try {
    let token = req.get('authorization')
    if (token?.toLowerCase().startsWith('bearer')) {
      token = token.slice(7, token.length)
    }

    if (token) {
      const { forToken } = jwt.verify(token, process.env.SECRET) as JwtPayload
      req.userName = forToken
      next()
    } else {
      return res.status(401).send('Access denied')
    }
  } catch (error) {
    res.status(400).send('Invalid Token')
  }
}

export const isAdmin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const item = req.userName
    const user = await FindUser(item)

    if (user.role === 'admin') {
      next()
      return
    }

    return res.status(403).json({ message: 'Require Admin Role!' })
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error })
  }
}
