import express from 'express'
import authRoutes from './routes/authRoutes.ts'
import countersRoutes from './routes/countersRoutes.ts'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { isTestEnv } from '../env.ts'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  morgan('dev', {
    skip: () => isTestEnv(),
  }),
)

// Health check enpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Productivity apps',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/counters', countersRoutes)

export { app }

export default app
