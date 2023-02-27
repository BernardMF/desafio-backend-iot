import * as controller from '../../devices/devices.controller'
import connectDB from '../../repositories/database/connectDB'
import { DeviceModel } from '../../repositories/database/models/deviceModel'
import { getMockReq, getMockRes } from '@jest-mock/express'
import * as m from '../__mocks__/devices/devices-controller.mock'
import { saveDevice } from '../../devices/devices.service'

const { res, clearMockRes } = getMockRes()

describe('Devices Controller', () => {
  beforeAll(async () => {
    process.env.PORT = '8888'
    process.env.DB_URL = 'mongodb://localhost:27017/test-db'
    process.env.DB_NAME = 'test-db'
    process.env.DEVICES_TABLE = 'devices-controllers-test'
    await connectDB()
  })
  afterAll(async () => {
    await DeviceModel.deleteMany({})
  })
  beforeEach(() => {
    clearMockRes()
  })

  it('should create a device', async () => {
    await controller.createDevice(m.createRequest, res)
    expect(res.status).toHaveBeenCalledWith(201)
  })
  it('should fail to create a device because request is invalid', async () => {
    await controller.createDevice(m.createRequestInvalid, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('should return a successfull query', async () => {
    await controller.queryDevices(m.queryRequest, res)
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('should return a successfull query', async () => {
    await controller.queryDevices(m.queryRequestInvalid, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('should return a device by id', async () => {
    const device = await saveDevice(m.validCreateBody)
    const request = getMockReq({
      params: {
        id: device.id
      }
    })
    await controller.getDeviceById(request, res)
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('should fail when searching a device by id', async () => {
    await controller.getDeviceById(m.idRequestInvalid, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('should delete a device by id', async () => {
    const device = await saveDevice(m.validCreateBody)
    const request = getMockReq({
      params: {
        id: device.id
      }
    })
    await controller.deleteDevice(request, res)
    expect(res.status).toHaveBeenCalledWith(204)
  })

  it('should fail to delete device because it does not exist', async () => {
    await controller.deleteDevice(m.idRequestInvalid, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('should update device correctly', async () => {
    const device = await saveDevice(m.validCreateBody)
    const request = getMockReq({
      params: {
        id: device.id
      },
      body: m.validCreateBody
    })
    await controller.updateDevice(request, res)
    expect(res.status).toHaveBeenCalledWith(200)
  })

  it('should fail to update device because it does not exist', async () => {
    await controller.updateDevice(m.idRequestInvalid, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })
  it('should fail to update device because request does not have id', async () => {
    await controller.updateDevice(m.idRequestWithoutId, res)
    expect(res.status).toHaveBeenCalledWith(400)
  })
})
