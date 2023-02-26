import mongoose from 'mongoose'

export default async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('connected to db')
  } catch (error) {
    console.error(`Failed to connect to MongoDB with string ${process.env.DB_URL}`, error)
    throw new Error(error)
  }
}
