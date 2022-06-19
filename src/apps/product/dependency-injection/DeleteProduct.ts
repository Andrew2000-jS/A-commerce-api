import { DeleteProduct } from '../../../context/product/application'
import MongoProductRepository from '../../../context/product/infrastructure/database/persistence/mongo/MongoProductRepository'

const productRepository = new MongoProductRepository()

export default DeleteProduct(productRepository)
