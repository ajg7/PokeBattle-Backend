const client = require("../../../db-config");

const getTeamById = async id => {
	const data = await client.query(`SELECT * FROM TEAMS WHERE teams.id = ${id}`);
	return data.rows[0];
};

const getTeamsByUserId = async user_Id => {
	const data = await client.query(`SELECT * FROM teams WHERE user_Id = ${user_Id}`);
	return data.rows;
};

const makeTeam = async (userId, teamName) => {
	const query = {
		text: "INSERT INTO teams (team_name, user_Id) VALUES($1, $2) RETURNING teams.id",
		values: [teamName, userId],
	};
	const data = await client.query(query);
	return data.rows[0];
	
};

const removeTeam = async id => {
	const data = await client.query(`DELETE FROM teams WHERE teams.id = ${id} RETURNING *`);
	return data.rows[0];
};

module.exports = {
	getTeamById,
	getTeamsByUserId,
	makeTeam,
	removeTeam,
};
