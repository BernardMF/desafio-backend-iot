import mongoose from 'mongoose'

const deviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    topic: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

export const deviceModel = mongoose.model(process.env.DB_NAME, deviceSchema, process.env.DEVICES_TABLE)
