const db = require("../../db/db-config");

// User can make an account
const register = newUser => {
	return db("users").insert(newUser).returning("id");
};

// User is found by their id
const getById = id => db("users").where({ id }).first();

// User is found by a specific parameter
const findBy = filter => db("users").where(filter).orderBy("id");

// User can be deleted
const removeUser = id => db("users").where({ id }).del();

module.exports = {
	register,
	getById,
	findBy,
	removeUser,
};
