export interface IProductEntity {
  id: string
  title: string
  description?: string
  price: number
  category: string
  SKU: number
  quantity: number
  image: string
  tags?: string[]
}
