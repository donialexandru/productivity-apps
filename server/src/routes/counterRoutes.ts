import { Router } from 'express'
import { validateBody } from '../midlleware/validation.ts'
import { z } from 'zod'

const createCounterSchema = z.object({
  name: z.string(),
})

const createParamsSchema = z.object({
  id: z.string().min(1),
})

const router = Router()

router.post('/', validateBody(createCounterSchema), (req, res) => {
  res.status(201).json({ message: 'counter successfully created' })
})

export default router
