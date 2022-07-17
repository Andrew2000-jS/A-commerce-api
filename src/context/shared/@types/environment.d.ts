declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      MONGO_DB_URI: string | undefined
      MONGO_DB_TEST: string | undefined
      SECRET: string
    }
  }

  namespace Express {
    interface Request {
      userId?: any
    }
  }
}

export { ProcessEnv }
