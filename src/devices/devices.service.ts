import { createDeviceSchema, CreateDeviceType } from './schemas/create-device.schema'
import { validateRequestSchema } from '../utils'
import { DeviceModel } from '../repositories/database/models/deviceModel'
const schemas = {
  create: createDeviceSchema
}

export function validateBody(body: unknown, caller: string): CreateDeviceType {
  return validateRequestSchema(schemas[caller], body)
}

export async function saveDevice(body: CreateDeviceType): Promise<any> {
  // Insert device in database
  const device = new DeviceModel(body)
  return device.save()
}
