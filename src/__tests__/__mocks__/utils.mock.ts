import z from 'zod'
import { getMockReq } from '@jest-mock/express'

export const testSchema = z.object({
  id: z.number()
})

export const validRequest = getMockReq({
  id: 1
})

export const invalidRequest = getMockReq({
  id: '1'
})
