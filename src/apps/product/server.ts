import express, { Express } from 'express'

export class Server {
  private readonly express: Express
  private readonly port: string

  constructor (port: string) {
    this.port = port
    this.express = express()
  }

  async listen (): Promise<void> {
    return await new Promise((resolve) => {
      this.express.listen(this.port, () => console.log(`Server on port ${this.port}`))
      resolve()
    })
  }
}
