import { Router } from 'express'
import { productController } from '../controller/Product.controller'
const router = Router()

router.get('/', (_req, res) => {
  res.send('Hello World!')
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/product', productController)

export default router
