import { Router } from 'express'
import authController from '../controllers/auth.controller.js'

let route = Router()

route.post('/register', authController.REGISTER)

export default route