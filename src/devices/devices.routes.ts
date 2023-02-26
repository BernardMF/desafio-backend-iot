import { Router } from 'express'
import { createDevice, getDevice, getDeviceById } from './devices.controller'
const router = Router()

router.post('/', createDevice)

router.get('/', getDevice)

router.get('/:id', getDeviceById)

export const devicesRouter = router
