import { Router } from 'express'
import { register } from '../controllers/authController.ts'
import { validateBody } from '../midlleware/validation.ts'
import { CreateUserSchema } from 'shared'
const router = Router()

router.post('/register', validateBody(CreateUserSchema), register)

router.post('/login', (req, res) => {
  res.status(201).json({ message: 'user logged in' })
})

export default router
