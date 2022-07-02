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
  }

}, { timestamps: true, versionKey: false })

UserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
  } else {
    return next()
  }
})

UserSchema.methods.comparePassword = async function (password: string, callback: any): Promise<any> {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error != null) {
      return callback(error)
    } else {
      callback(null, isMatch)
    }
  })
}

export default model('User', UserSchema)
