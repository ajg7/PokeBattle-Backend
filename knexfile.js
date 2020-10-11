module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './server/data/pokemon_database.db3'
    },
    migrations: {
      directory: './server/migrations'
    },
    seeds: {
      directory: "./server/seeds"
    }
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './server/data/pokemon_database.db3'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./server/migrations"
    },
    seeds: {
      directory: "./server/seeds"
    }
  }

};
