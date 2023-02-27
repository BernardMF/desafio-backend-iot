import { Router } from 'express'
import { createDevice, queryDevices, getDeviceById, updateDevice, deleteDevice } from './devices.controller'
const router = Router()

router.post('/', createDevice)

router.get('/', queryDevices)

router.get('/:id', getDeviceById)

router.post('/:id', updateDevice)

router.delete('/:id', deleteDevice)

export const devicesRouter = router
