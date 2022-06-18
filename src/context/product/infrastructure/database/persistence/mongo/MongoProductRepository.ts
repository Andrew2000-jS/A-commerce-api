import ProductSchema from '../../schemas/ProductSchema'
import { IProductEntity } from '../../../../domain/entities/product.entity'
import { ProductRepository } from '../../../../domain/repository/product.repository'

export default class MongoProductRepository implements ProductRepository {
  public async save (product: IProductEntity): Promise<IProductEntity> {
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

    const createAProduct = await ProductSchema.create(newProduct)
    const savedProduct = await createAProduct.save()
    return savedProduct
  }
}
