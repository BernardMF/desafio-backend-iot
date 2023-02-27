import { Request, Response } from 'express'
import * as service from './devices.service'
import { CreateDeviceType, DeviceType, DeviceIdType } from './device.schemas'

export async function createDevice(req: Request, res: Response) {
  try {
    const body: CreateDeviceType = service.validateRequest(req.body, 'create')
    const device = await service.saveDevice(body)
    res.status(201).json(device)
  } catch (error) {
    res.status(error.status).json(error.message)
  }
}

export async function queryDevices(req: Request, res: Response) {
  try {
    const query: Partial<DeviceType> = service.validateRequest(req.query, 'query')
    const devices = await service.queryDevices(query)
    res.status(200).json(devices)
  } catch (error) {
    res.status(error.status).json(error.message)
  }
}

export async function getDeviceById(req: Request, res: Response) {
  try {
    const id: DeviceIdType = service.validateRequest(req.params?.id, 'id')
    const device = await service.findDeviceById(id)
    res.status(200).json(device)
  } catch (error) {
    res.status(error.status).json(error.message)
  }
}

export async function deleteDevice(req: Request, res: Response) {
  try {
    const id: DeviceIdType = service.validateRequest(req.params?.id, 'id')
    await service.deleteDevice(id)
    res.status(204).json()
  } catch (error) {
    res.status(error.status).json(error.message)
  }
}

export async function updateDevice(req: Request, res: Response) {
  try {
    const id: DeviceIdType = service.validateRequest(req.params?.id, 'id')
    const body: Partial<CreateDeviceType> = service.validateRequest(req.body, 'create')
    const device = await service.updateDevice(id, body)
    res.status(200).json(device)
  } catch (error) {
    res.status(error.status).json(error.message)
  }
}
