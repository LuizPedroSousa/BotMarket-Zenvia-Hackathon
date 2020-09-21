// Update with your config settings.

const path = require('path');
require('dotenv').config();

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'Database', 'Migrations'),
  },
  useNullAsDefault: true,
};
