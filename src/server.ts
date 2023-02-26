import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './repositories/database/connectDB'
import { devicesRouter } from './devices/devices.routes'

const port = process.env.PORT || 8888
connectDB()

const app = express()
app.use(cors())

app.use('/devices', devicesRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
