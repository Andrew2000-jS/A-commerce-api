import { Router } from 'express'
import { createUserController, findUsersController, updateUserController, deleteUserController } from '../controller'
import { verifyToken } from '../../shared'

const router = Router()

router.route('/users')
  .get(findUsersController)
  .post(createUserController)

router.put('/user/:id', verifyToken, updateUserController)
router.delete('/user/:id', verifyToken, deleteUserController)

export default router
