/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createProductController, findAllProductsController, findProduct, updateProduct, deleteProduct } from '../controller/Product.controller'
const router = Router()

router.route('/products').get(findAllProductsController).post(createProductController)

router.route('/product/:id').get(findProduct).put(updateProduct).delete(deleteProduct)

export default router
