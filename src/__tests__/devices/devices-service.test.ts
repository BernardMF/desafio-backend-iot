import { validateBody, saveDevice } from '../../devices/create-devices.service'
import * as m from '../__mocks__/devices/create-devices.mock'
import connectDB from '../../repositories/database/connectDB'

describe('validateBody', () => {
  it('should throw an error if the body is invalid', () => {
    expect(() => validateBody(m.invalidBody, 'create')).toThrow()
  })
})

describe('Insert Device on BD', () => {
  beforeAll(async () => {
    process.env.PORT = '8888'
    process.env.DB_URL = 'mongodb://localhost:27017/test-db'
    process.env.DB_NAME = 'test-db'
    process.env.DEVICES_TABLE = 'test-table'
    await connectDB()
  })
  it('should insert a device on the database', async () => {
    const device = await saveDevice(m.validBody)
    expect(typeof device.id).toBe('string')
  })
})
