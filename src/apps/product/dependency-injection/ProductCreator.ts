import { ProductCreator } from '../../../context/product/application'
import MongoProductRepository from '../../../context/product/infrastructure/database/persistence/mongo/MongoProductRepository'

const productRepository = new MongoProductRepository()

export default ProductCreator(productRepository)
