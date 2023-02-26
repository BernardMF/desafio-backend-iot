import z from 'zod'

const createDeviceSchema = z.object({
  name: z.string(),
  description: z.string(),
  topic: z.string()
})

export type CreateDeviceType = z.infer<typeof createDeviceSchema>

export const CreateDeviceRequestSchema = z.object({
  body: createDeviceSchema
})
