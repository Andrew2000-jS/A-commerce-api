import { Product } from '../domain/model/product.model'
import { ProductRepository } from '../domain/repository/product.repository'

export class UpdateProduct {
  constructor (private readonly productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async update (id: string, product: Product): Promise<void> {
    try {
      const productToUpdate = await this.productRepository.findById(id)
      productToUpdate.title = product.title
      productToUpdate.description = product.description
      productToUpdate.price = product.price
      productToUpdate.category = product.category
      await this.productRepository.update(productToUpdate)
    } catch (error) {
      console.log(error)
    }
  }
}
