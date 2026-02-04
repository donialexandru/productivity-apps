import { Router } from 'express'
import { validateBody } from '../midlleware/validation.ts'
import { z } from 'zod'
import {
  getUserCounters,
  createUserCounter,
} from '../controllers/counterController.ts'

const createCounterSchema = z.object({
  name: z.string().min(1).max(100),
  targetCounter: z.number().int().optional().default(0),
})

const createParamsSchema = z.object({
  id: z.string().min(1),
})

const router = Router()

router.get('/', getUserCounters)

router.post('/', validateBody(createCounterSchema), createUserCounter)

export default router
