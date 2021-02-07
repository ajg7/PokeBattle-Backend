const db = require("../../db/db-config");
const client = require("../../../db-config");

// User can make an account
const register = async newUser => {
	const keys = Object.keys(newUser);
    const values = Object.values(newUser);
	const query = {
		text: `INSERT INTO users(${keys[0]}, ${keys[1]}) VALUES($1, $2) RETURNING users.id`,
		values: values
	};
	const data = await client.query(query);
	return data.rows[0];
};

// User is found by a specific parameter
const findBy = async filter => {
	const email = Object.keys(filter);
	const value = Object.values(filter);
	const query = {
		text: `SELECT * FROM users WHERE ${email} = $1`,
		values: value
	};
	const data = await client.query(query);
	return data.rows[0];
};

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
	findBy,
	removeUser,
	updatePoints,
	getTotalPoints,
};
