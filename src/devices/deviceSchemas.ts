import z from 'zod'
import { Types } from 'mongoose'

export const deviceSchemas = z.object({
  name: z.string(),
  description: z.string(),
  topic: z.string()
})

export type CreateDeviceType = z.infer<typeof deviceSchemas>

export const deviceIdSchema = z.string().transform((value) => new Types.ObjectId(value))
export type DeviceIdType = z.infer<typeof deviceIdSchema>

const timestampRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/
export const deviceSchema = z.object({
  id: deviceIdSchema,
  name: z.string(),
  description: z.string(),
  topic: z.string(),
  createdAt: z.string().regex(timestampRegex),
  updatedAt: z.string().regex(timestampRegex)
})

export type DeviceType = z.infer<typeof deviceSchema>
