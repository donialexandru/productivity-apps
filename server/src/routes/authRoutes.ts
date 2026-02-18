import { Router } from 'express'
import { login, register } from '../controllers/authController.ts'
import { validateBody } from '../midlleware/validation.ts'
import { CreateUserSchema, SignInUserSchema } from 'shared'
const router = Router()

router.post('/register', validateBody(CreateUserSchema), register)

router.post('/login', validateBody(SignInUserSchema), login)

export default router
