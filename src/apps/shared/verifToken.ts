import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

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
      const { forToken: id } = jwt.verify(token, process.env.SECRET) as JwtPayload
      req.userId = id
      next()
    } else {
      return res.status(401).send('Access denied')
    }
  } catch (error) {
    res.status(400).send('Invalid Token')
  }
}
