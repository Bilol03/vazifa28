import { Router } from 'express'
import authController from '../controllers/auth.controller.js'

let route = Router()

route.post('/register', authController.REGISTER)
route.post('/login', authController.LOGIN)

export default route