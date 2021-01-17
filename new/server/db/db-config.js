require("dotenv").config();
const knex = require("knex");
const dbEnvironment = "development";
const knexConfig = require("../../knexfile")[dbEnvironment];
module.exports = knex(knexConfig);
