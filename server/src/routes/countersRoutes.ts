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

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'All counters successfully retrieved',
    counters: [
      {
        id: 1,
        name: 'My first counter',
        description: 'This counter was created for the first time',
        currentCount: 0,
        targetCount: 10,
      },
      {
        id: 2,
        name: 'Second counter',
        description: 'This counter count to 5',
        currentCount: 2,
        targetCount: 5,
      },
    ],
  })
})

router.post('/', validateBody(createCounterSchema), (req, res) => {
  res.status(201).json({ message: 'counter successfully created' })
})

export default router
