import {
  validateBody,
  saveDevice,
  findDeviceById,
  queryDevices,
  deleteDevice,
  updateDevice
} from '../../devices/devices.service'
import * as m from '../__mocks__/devices/devices-service.mock'
import connectDB from '../../repositories/database/connectDB'
import { DeviceModel } from '../../repositories/database/models/deviceModel'
import { Types } from 'mongoose'

describe('validateBody', () => {
  it('should throw an error if the body is invalid', () => {
    expect(() => validateBody(m.invalidBody, 'create')).toThrow()
  })
})

describe('Devices CRUD Operations', () => {
  beforeAll(async () => {
    process.env.PORT = '8888'
    process.env.DB_URL = 'mongodb://localhost:27017/test-db'
    process.env.DB_NAME = 'test-db'
    process.env.DEVICES_TABLE = 'test-table'
    await connectDB()
  })
  afterAll(async () => {
    await DeviceModel.deleteMany({})
  })
  it('should insert a device on the database', async () => {
    const device = await saveDevice(m.validBody)
    expect(typeof device.id).toBe('string')
  })

  it('should get a device by id', async () => {
    const device = await saveDevice(m.validBody)
    const deviceById = await findDeviceById(device.id)
    expect(deviceById.name).toBe(m.validBody.name)
  })
  it('should throw error because id does not exist', async () => {
    await expect(findDeviceById(new Types.ObjectId('62a23958e5a9e9b88f853a67'))).rejects.toThrow('Device not found')
  })

  it('should get all devices', async () => {
    await saveDevice(m.validBody)
    const devices = await queryDevices({})
    expect(devices.length > 0).toBeTruthy()
  })

  it('should remove a device by id', async () => {
    const device = await saveDevice(m.validBody)
    await deleteDevice(device.id)
    await expect(findDeviceById(device.id)).rejects.toThrow('Device not found')
  })

  it('should update a device by id', async () => {
    const device = await saveDevice(m.validBody)
    await updateDevice(device.id, { name: 'updated' })
    const updatedDevice = await findDeviceById(device.id)
    expect(updatedDevice.name).toBe('updated')
  })
})
