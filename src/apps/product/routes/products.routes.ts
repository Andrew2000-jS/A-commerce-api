import { Router } from 'express'
import { createProductController, findAllProductsController, findProduct, updateProduct, deleteProduct } from '../controller/Product.controller'
import { isAdmin, verifyToken } from '../../shared'
const router = Router()

router.route('/products').get(findAllProductsController)
router.route('/product/:id').get(findProduct)

router.post('/products', [verifyToken, isAdmin], createProductController)
router.put('/product/:id', [verifyToken, isAdmin], updateProduct)
router.delete('/product/:id', [verifyToken, isAdmin], deleteProduct)

export default router
