// export default {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "123456789",
//   DB: "typeScriptNodeApp"
// };

import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations',
    },
    seeds: {
      directory: './src/seeds',
    },
  },
  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,  // Assuming production uses DATABASE_URL
    migrations: {
      tableName: 'knex_migrations',
      directory: './dist/migrations',
    },
    seeds: {
      directory: './dist/seeds',
    },
  },
};

export default config;