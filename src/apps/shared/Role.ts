import jwt from 'jsonwebtoken'
const ROLE: { [key: string]: any } = {
  user: (forToken: string) => {
    const token = jwt.sign({ forToken }, process.env.SECRET, { expiresIn: '24h' })
    return token
  },

  admin: (forToken: string) => {
    const token = jwt.sign({ forToken }, process.env.SECRET, { expiresIn: '24h', algorithm: 'HS256' })
    return token
  },

  error: () => {
    throw new Error('Invalid role')
  }
}

export default (forToken: any): string => {
  const { user, role } = forToken
  if (role === 'admin') {
    ROLE.admin(user)
  }
  ROLE.user(user)
  const generateToken = ROLE[role] || ROLE.error

  return generateToken(user, role)
}
