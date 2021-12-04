interface AppProcessEnv {
  NODE_ENV: 'development' | 'production';
  PORT?: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends AppProcessEnv {}
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
