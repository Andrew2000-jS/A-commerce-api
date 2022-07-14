/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Request, Response, NextFunction } from 'express'

interface errors {
  name: string
}

const ERROR_HANDLERS: { [key: string]: any } = {
  MongoServerError: (res: Response): void => {
    res.status(400).send({ error: 'The username cannot be duplicated' })
  },

  CastError: (res: Response): void => {
    res.status(400).send({ error: 'id used is malformed' })
  },

  defaultError: (res: any, error: errors): void => {
    console.error(error.name)
    res.status(500).end()
  }
}

export default (error: errors, _req: Request, res: Response, _next: NextFunction): void => {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
  handler(res, error)
}
