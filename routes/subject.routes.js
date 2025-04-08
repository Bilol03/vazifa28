import { Router } from 'express'
import subjectController from '../controllers/subject.controller.js'
import { checkUser } from '../middlewares/auth.middleware.js'
let route = Router()

route
	.route('/subjects')
	.get(subjectController.GET)
	.post(checkUser, subjectController.POST)

export default route
