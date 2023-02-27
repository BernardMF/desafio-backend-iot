import {
  deviceSchemas,
  CreateDeviceType,
  deviceIdSchema,
  DeviceIdType,
  deviceSchema,
  DeviceType
} from './deviceSchemas'
import { validateRequestSchema } from '../utils'
import { DeviceModel } from '../repositories/database/models/deviceModel'
import { BadRequest } from 'http-errors'

const schemas = {
  create: deviceSchemas,
  query: deviceSchema,
  id: deviceIdSchema
}

export function validateBody(body: unknown, type: string): CreateDeviceType {
  return validateRequestSchema(schemas[type], body)
}

export async function saveDevice(body: CreateDeviceType): Promise<any> {
  // Insert device in database
  const device = new DeviceModel(body)
  return device.save()
}

export async function findDeviceById(id: DeviceIdType): Promise<any> {
  const device = await DeviceModel.findById(id)
  console.debug('device found', device)
  if (!device) {
    throw new BadRequest('Device not found')
  }
  return device
}

export async function queryDevices(query: Partial<DeviceType>) {
  return DeviceModel.find(query)
}

export async function deleteDevice(id: string) {
  return DeviceModel.findByIdAndDelete(id)
}

export async function updateDevice(id: DeviceIdType, body: Partial<CreateDeviceType>) {
  const device = await findDeviceById(id)
  return device.update(body)
}
