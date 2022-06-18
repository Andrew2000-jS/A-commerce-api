import ProductCreator from './ProductCreator'
import MongoProductRepository from '../../../context/product/infrastructure/database/persistence/mongo/MongoProductRepository'

const productRepository = new MongoProductRepository()

export default ProductCreator(productRepository)
