const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	development: {
		client: "pg",
		connection: {
			host: "127.0.0.1",
			user: "postgres",
			password: "Romans8:37",
			database: "PokeBattle",
			charset: "utf8",
		},
		migrations: {
			directory: "./server/db/migrations",
		},
		seeds: {
			directory: "./server/db/seeds",
		},
	},

	test: {
		client: "pg",
		connection: {
			database: "PokeBattle",
			user: "postgres",
			password: "Romans8:37",
		},
		migrations: {
			directory: "./server/db/migrations",
		},
		seeds: {
			directory: "./server/db/seeds",
		},
	},

	production: {
		client: "pg",
		connection: `${process.env.DATABASE_URL}?ssl=true`,
		sslmode: require,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: "./server/db/migrations",
		},
		seeds: {
			directory: "./server/db/seeds",
		},
	},
};
