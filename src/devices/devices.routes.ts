import { Request, Response, Router } from 'express'
const router = Router()

router.post('/', (req: Request, res: Response) => {
  res.send('Success creating a new device')
})

router.get('/', (req: Request, res: Response) => {
  res.send('List of devices available')
})

router.get('/:id', (req: Request, res: Response) => {
  res.send(`Info on device with id: {${req.params.id}}`)
})

export const devicesRouter = router
