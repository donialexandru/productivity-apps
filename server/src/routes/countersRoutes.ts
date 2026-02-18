import { Router } from 'express'
import { validateBody } from '../midlleware/validation.ts'
import {
  getUserCounters,
  createUserCounter,
  deleteUserCounter,
} from '../controllers/counterController.ts'
import { CreateCounterSchema, CounterSchema, UpdateCounterSchema } from 'shared'
import { authenticateToken } from '../midlleware/auth.ts'

const router = Router()

// Protect routes; only authenticated users can access them
router.use(authenticateToken)

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
