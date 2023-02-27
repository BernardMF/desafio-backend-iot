import { devicesRouter } from '../../devices/devices.routes'
import { validCreateBody } from '../__mocks__/devices/devices-controller.mock'
import request from 'supertest'
import express from 'express'
jest.mock('../../devices/devices.service')

const app = express()
app.use('/devices', devicesRouter)
describe('Devices Routes', () => {
  it('should request createDevice at /devices', async () => {
    const res = await request(app).post('/devices').send(validCreateBody)
    expect(res.status).toBe(201)
    expect(res.header['content-type']).toMatch(/json/)
  })

  it('should request queryDevices at /devices', async () => {
    const res = await request(app).get('/devices')
    expect(res.status).toBe(200)
    expect(res.header['content-type']).toMatch(/json/)
  })

  it('should request getDeviceById at /devices/:id', async () => {
    const res = await request(app).get('/devices/123')
    expect(res.status).toBe(200)
    expect(res.header['content-type']).toMatch(/json/)
  })
  it('should request updateDevice at /devices/:id', async () => {
    const res = await request(app).post('/devices/123').send(validCreateBody)
    expect(res.status).toBe(200)
    expect(res.header['content-type']).toMatch(/json/)
  })

  it('should request deleteDevice at /devices/:id', async () => {
    const res = await request(app).delete('/devices/123')
    expect(res.status).toBe(204)
  })
})
