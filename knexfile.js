const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

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
		connection: "postgres://ezpituunmbeqlt:da877acbb16576366bae149e60b30558625265bc966b4466cba91190900ee8ff@ec2-3-222-11-129.compute-1.amazonaws.com:5432/dd1utp5m233280",
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
		sl: true
	},
};
