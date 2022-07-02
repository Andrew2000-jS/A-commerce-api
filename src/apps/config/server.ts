import express, { Express } from 'express'
import { productsRoutes } from '../product/routes'
import { userRoutes } from '../logIn/routes'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

export class Server {
  private readonly express: Express
  private readonly port: string

  constructor (port: string) {
    this.port = port
    this.express = express()
    this.express.use(helmet())
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(morgan('dev'))
    this.express.use('/api', productsRoutes)
    this.express.use('/api', userRoutes)
  }

  async listen (): Promise<void> {
    return await new Promise((resolve) => {
      this.express.listen(this.port, () => console.log(`Server on port ${this.port}`))
      resolve()
    })
  }
}
