module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/data/Pokedex_Database.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/migrations'
    },
    seeds: {
      directory: "./server/seeds"
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./server/migrations"
    },
    seeds: {
      directory: "./server/seeds"
    }
  }

};
