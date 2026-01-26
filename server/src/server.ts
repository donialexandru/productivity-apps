import express from 'express'

const app = express()

// Health check enpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Productivity apps',
  })
})

export { app }

export default app
