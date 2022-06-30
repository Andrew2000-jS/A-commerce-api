import { ObjectId } from 'mongoose'
export interface IProductEntity {
  id: ObjectId
  title: string
  description?: string
  price: number
  category: string
  SKU: number
  quantity: number
  image: string
  tags?: string[]
}
