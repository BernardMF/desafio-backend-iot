import z from 'zod'

export const createDeviceSchema = z.object({
  name: z.string(),
  description: z.string(),
  topic: z.string()
})

export type CreateDeviceType = z.infer<typeof createDeviceSchema>

const timestampRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/
export const deviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  topic: z.string(),
  createdAt: z.string().regex(timestampRegex),
  updatedAt: z.string().regex(timestampRegex)
})

export type DeviceType = z.infer<typeof deviceSchema>
