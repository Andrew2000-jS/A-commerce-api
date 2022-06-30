import ProductSchema from '../../schemas/ProductSchema'
import { IProductEntity } from '../../../../domain/entities/product.entity'
import { ProductRepository } from '../../../../domain/repository/product.repository'

export default class MongoProductRepository implements ProductRepository {
  public async save (product: IProductEntity): Promise<IProductEntity> {
    const newProduct = {
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

  public async findAll (): Promise<IProductEntity[]> {
    const products = await ProductSchema.find()
    return products
  }

  public async findProduct (id: string): Promise<IProductEntity> {
    const product = await ProductSchema.findById(id)
    return product
  }

  public async update (product: IProductEntity): Promise<IProductEntity> {
    const updatedProduct = await ProductSchema.findByIdAndUpdate(product.id, product)
    return updatedProduct
  }

  public async delete (id: string): Promise<void> {
    await ProductSchema.findByIdAndDelete(id)
  }
}
