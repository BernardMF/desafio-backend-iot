import z from 'zod'

export const createDeviceSchema = z.object({
  name: z.string(),
  description: z.string(),
  topic: z.string()
})

export type CreateDeviceType = z.infer<typeof createDeviceSchema>
