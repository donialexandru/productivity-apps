import { Router } from 'express'
import { validateBody } from '../midlleware/validation.ts'
import {
  getUserCounters,
  createUserCounter,
  deleteUserCounter,
} from '../controllers/counterController.ts'
import { CreateCounterSchema, CounterSchema, UpdateCounterSchema } from 'shared'

const router = Router()

router.get('/', getUserCounters)

router.post('/', validateBody(CreateCounterSchema), createUserCounter)
router.delete('/:id', deleteUserCounter)

export default router
