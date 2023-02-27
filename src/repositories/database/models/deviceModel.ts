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

export const DeviceModel = mongoose.model('Device', deviceSchema, process.env.DEVICES_TABLE)
