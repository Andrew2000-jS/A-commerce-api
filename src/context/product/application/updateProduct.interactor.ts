import { ProductRepository } from '../domain/repository/product.repository'

export class UpdateProduct {
  constructor (private readonly productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async update (id: string): Promise<void> {
    await this.productRepository.update(id)
  }
}
