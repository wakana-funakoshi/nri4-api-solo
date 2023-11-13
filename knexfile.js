// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'dogs',
      user:     'postgres',
      password: 'Kossyi1474'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'dogs',
      user:     'postgres',
      password: 'Kossyi1474'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'dogs',
      user:     'postgres',
      password: 'Kossyi1474'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  }
};
