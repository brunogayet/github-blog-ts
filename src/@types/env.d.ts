/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_HOST: string
  readonly VITE_GITHUB_USERNAME: string
  readonly VITE_GITHUB_REPO: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
