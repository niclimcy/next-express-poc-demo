import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'

export function connectDB() {
  const url = process.env.MONGODB_URI || 'mongodb://localhost/bookstore'

  try {
    mongoose.connect(url)
  } catch (err: unknown) {
    console.error(err)
    process.exit(1)
  }
  const dbConnection = mongoose.connection
  dbConnection.once('open', () => {
    console.log(`Database connected: ${url}`)
  })

  dbConnection.on('error', (err) => {
    console.error(`connection error: ${err}`)
  })
  return
}

export async function connectAuthDB(): Promise<MongoClient> {
  const url = process.env.MONGODB_URI || 'mongodb://localhost/bookstore'

  const client = new MongoClient(url)
  return client.connect()
}