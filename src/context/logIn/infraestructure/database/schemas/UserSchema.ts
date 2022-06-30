import { Schema, model } from 'mongoose'

const UserModel = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true
  },
  mail: {
    type: String,
    required: true
  }
}, { timestamps: true, versionKey: false })

export default model('User', UserModel)
