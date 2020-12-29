const dotenv = require("dotenv");
dotenv.config({ path: '../.env' });

module.exports = {
  development: {
    client: "pg",
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Romans8:37',
      database : 'pokebattle',
      charset: 'utf8'
    },
    migrations: {
      directory: './server/migrations'
    },
    seeds: {
      directory: "./server/seeds"
    }
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './server/migrations',
    },
    seeds: { 
      directory: './server/seeds' 
    },
  },

  production: {
    client: "pg",
    connection: {
      filename: process.env.DATABASE_URL
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
