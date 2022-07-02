import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  tags: [String],
  SKU: {
    type: Number,
    requires: true
  },
  quantity: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true, versionKey: false })

export default model('Product', ProductSchema)
