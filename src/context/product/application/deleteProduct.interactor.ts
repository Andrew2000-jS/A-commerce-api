import { ProductRepository } from '../domain/repository/product.repository'

export class DeleteProduct {
  constructor (private readonly productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async delete (id: string): Promise<void> {
    const product = await this.productRepository.findById(id)
    const { id: idToDelete } = product
    await this.productRepository.delete(idToDelete)
  }
}
