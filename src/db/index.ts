import knex from 'knex';
import config from '../config/db.config';

// Use the appropriate environment configuration
const environment = process.env.NODE_ENV || 'development';
const db = knex(config[environment]);

export default db;

