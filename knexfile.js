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

  staging: {
    client: 'postgresql',
    connection: {
      database: "pokebattle",
      user: "postgres",
      password: "Romans8:37"
    },
    migrations: {
      directory: './server/migrations',
    },
    seeds: { 
      directory: './server/seeds' 
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "pokebattle",
      user: "postgres",
      password: "Romans8:37"
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
