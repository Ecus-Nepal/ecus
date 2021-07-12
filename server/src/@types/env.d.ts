declare namespace NodeJS {
  interface ProcessEnv {
    CLIENT_END_POINT: string;
    DATABASE_URI: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    SERVER_END_POINT: string;
    JWT_TOKEN: string;
    REF_JWT_TOKEN: string;
  }
}