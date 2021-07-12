declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URI: string;
    SERVER_END_POINT: string;
    CLIENT_END_POINT: string;
  }
}