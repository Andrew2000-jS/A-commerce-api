import { Server } from './server'
import '../../context/shared/mongoDB'

const PORT = '8080'
const server = new Server(PORT)

async function main (): Promise<void> {
  try {
    await server.listen()
  } catch (error) {
    console.log(error)
  }
}

void main()
