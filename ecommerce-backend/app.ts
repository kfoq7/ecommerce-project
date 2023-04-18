import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { router } from './routes'
import { dbConnect } from './config/dbConnect'
import { errorHandlerResponse } from './handlers/errorHandler'

const PORT = process.env.PORT ?? 8000

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(router)
app.use(errorHandlerResponse)

dbConnect()

app.listen(PORT, () => {
  console.log(`Server develop on http://localhost:${PORT}`)
})
