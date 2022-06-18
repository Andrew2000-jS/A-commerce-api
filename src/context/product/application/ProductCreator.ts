import { IProductEntity } from '../domain/entities/product.entity'
import { ProductRepository } from '../domain/repository/product.repository'

const ProductCreator = (ProductRepo: ProductRepository) => async (product: IProductEntity): Promise<IProductEntity> => {
  const newProduct = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
    SKU: product.SKU,
    quantity: product.quantity,
    image: product.image,
    tags: product.tags
  }

  const savedProduct = await ProductRepo.save(newProduct)
  return savedProduct
}

export default ProductCreator
