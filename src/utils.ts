import { AnyZodObject } from 'zod'
import { BadRequest } from 'http-errors'

export function validateRequestSchema(schema: AnyZodObject, request: unknown) {
  try {
    return schema.parse(request)
  } catch (error) {
    throw new BadRequest(error)
  }
}
