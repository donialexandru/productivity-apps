import { Router } from 'express'
import { validateBody } from '../midlleware/validation.ts'
import {
  getUserCounters,
  createUserCounter,
  deleteUserCounter,
} from '../controllers/counterController.ts'
import { CreateCounterSchema, CounterSchema, UpdateCounterSchema } from 'shared'

const router = Router()

// Get all counters
router.get('/', getUserCounters)

// Get a specific counter
// router.get('/:id', getUserCounters)

// Create a counter
router.post('/', validateBody(CreateCounterSchema), createUserCounter)

// Update a counter
// router.put('/:id')

// Delete a counter
router.delete('/:id', deleteUserCounter)

export default router
