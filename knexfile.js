const config = require('./config');

const dbConfig = {
    client: 'postgresql',
    connection: {
      host:     config.get('db.host'),
      port:     config.get('db.port'),
      database: config.get('db.database'),
      user:     config.get('db.user'),
      password: config.get('db.password')
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    }
};

module.exports = {
  development: dbConfig, staging: dbConfig, production: dbConfig
};
