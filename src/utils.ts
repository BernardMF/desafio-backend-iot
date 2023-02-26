import { AnyZodObject } from 'zod'

export function validateSchema(schema: AnyZodObject, object: unknown) {
  return schema.parse(object)
}
