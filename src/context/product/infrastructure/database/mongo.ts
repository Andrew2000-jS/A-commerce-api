import { ProcessEnv } from '../../../shared/@types/environment'
import { config } from 'dotenv'
import mongoose from 'mongoose'
config()

const { MONGO_DB_URI, MONGO_DB_TEST, NODE_ENV } = process.env

const connectionStr: ProcessEnv = NODE_ENV === 'test'
  ? MONGO_DB_TEST
  : MONGO_DB_URI

async function mongoConnect (): Promise<void> {
  await mongoose.connect(connectionStr)
  console.log('DB is connected')
}

void mongoConnect()
