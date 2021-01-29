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

// User can record their score on "Who's that pokemon?"
const updatePoints = (id, points) => {
	return db("users").where({ id }).update({ total_points: points });
};

const getTotalPoints = id => {
	return db("users").where({ id }).select("total_points");
};

module.exports = {
	register,
	getById,
	findBy,
	removeUser,
	updatePoints,
	getTotalPoints,
};
