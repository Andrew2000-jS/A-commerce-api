import { Product } from '../domain/model/product.model'
import { ProductRepository } from '../domain/repository/product.repository'

export class SaveProduct {
  constructor (private readonly productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async save (product: Product): Promise<Product> {
    const savedProduct = await this.productRepository.save(product)
    return savedProduct
  }
}
