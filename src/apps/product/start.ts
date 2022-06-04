import { Server } from './server'
import '../../context/product/infrastructure/database'

const PORT = '5000'
const server = new Server(PORT)

async function main (): Promise<void> {
  try {
    await server.listen()
  } catch (error) {
    console.log(error)
  }
}

void main()
