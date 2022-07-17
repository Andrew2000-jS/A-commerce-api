import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
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
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  role: {
    type: String,
    required: true
  }

}, { timestamps: true, versionKey: false })

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
  } else {
    return next()
  }
})

export default model('User', UserSchema)
