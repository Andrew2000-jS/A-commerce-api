import { Router } from 'express'
import { logInController } from '../controller'

const router = Router()

router.route('/login').post(logInController)

export default router
