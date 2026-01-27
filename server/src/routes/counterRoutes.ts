import { Router } from 'express'

const router = Router()

router.post('/create', (req, res) => {
  res.status(201).json({ message: 'counter successfully created' })
})

export default router
