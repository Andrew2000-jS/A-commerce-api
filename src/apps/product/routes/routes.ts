import { Router } from 'express'
import { createProductController, findAllProductsController, findProduct, updateProduct, deleteProduct } from '../controller/Product.controller'
const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', findAllProductsController)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/product', createProductController)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/product/:id', findProduct)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.put('/product/:id', updateProduct)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.delete('/product/:id', deleteProduct)

export default router
