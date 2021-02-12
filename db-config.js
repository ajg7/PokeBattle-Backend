const { Client } = require("pg");

const client = new Client({
	connectionString: process.env.HEROKU_POSTGRESQL_PURPLE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

module.exports = client;
