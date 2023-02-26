import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { devicesRouter } from './devices/devices.routes'

dotenv.config()
const port = process.env.PORT || 8888

const app = express()
app.use(cors())

app.use('/devices', devicesRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
