/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createUserController, findUsersController, findUserController, updateUserController, deleteUserController } from '../controller/user.controller'

const router = Router()

router.route('/users')
  .get(findUsersController)
  .post(createUserController)

router.route('/user/:id')
  .get(findUserController)
  .put(updateUserController)
  .delete(deleteUserController)

export default router
