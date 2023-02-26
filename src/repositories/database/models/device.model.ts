import mongoose from 'mongoose'

const deviceSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    topic: String
  },
  {
    timestamps: true
  }
)

export const deviceModel = mongoose.model('Device', deviceSchema)
