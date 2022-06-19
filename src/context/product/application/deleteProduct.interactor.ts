import { ProductRepository } from '../domain/repository/product.repository'

const DeleteProduct = (ProductRepo: ProductRepository) => async (id: string): Promise<void> => await ProductRepo.delete(id)

export default DeleteProduct
