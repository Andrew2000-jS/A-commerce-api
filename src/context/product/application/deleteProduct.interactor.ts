import { ProductRepository } from '../domain/repository/product.repository'

export class DeleteProduct {
  constructor (private readonly productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async delete (id: string): Promise<void> {
    await this.productRepository.delete(id)
  }
}
