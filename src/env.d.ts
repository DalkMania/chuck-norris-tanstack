/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Client-side environment variables
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Server-side environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly TMDB_API_KEY: string
      readonly NODE_ENV: 'development' | 'production' | 'test'
    }
  }
}

export {}
