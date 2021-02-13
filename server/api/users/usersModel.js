const client = require("../../../db-config");

// User can make an account
const register = async newUser => {
	const keys = Object.keys(newUser);
	const values = Object.values(newUser);
	const query = {
		text: `INSERT INTO users(${keys[0]}, ${keys[1]}) VALUES($1, $2) RETURNING users.id`,
		values: values,
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
		values: value,
	};
	const data = await client.query(query);
	return data.rows[0];
};

// User can be deleted
const removeUser = async id => {
	const data = await client.query(`DELETE FROM users WHERE users.id = ${id} RETURNING users.id`);
	return data.rows[0];
};

// User can record their score on "Who's that pokemon?"
const updatePoints = async (id, points) => {
	const data = await client.query(
		`UPDATE users SET total_points = ${points} WHERE users.id = ${id}`
	);
	return data;
};

const getTotalPoints = async id => {
	const data = await client.query(`SELECT total_points FROM users WHERE users.id = ${id}`);
	return data.rows[0];
};

module.exports = {
	register,
	findBy,
	removeUser,
	updatePoints,
	getTotalPoints,
};
