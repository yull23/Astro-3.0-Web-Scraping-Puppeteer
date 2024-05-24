/// <reference types="astro/client" />
interface ImportMetaEnv {
  // OpenIa
  readonly BASE_URI: string;
  readonly TOKEN_KEY: string;
  readonly PUBLIC_API_URL: string;
  // SpaceX - API
  readonly BASE_URI_SPACEX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
