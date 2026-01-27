import express from 'express'
import authRoutes from './routes/authRoutes.ts'
import counterRoutes from './routes/counterRoutes.ts'

const app = express()

// Health check enpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Productivity apps',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/counter', counterRoutes)

export { app }

export default app
