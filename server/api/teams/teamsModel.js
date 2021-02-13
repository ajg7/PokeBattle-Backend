const client = require("../../../db-config");

const getTeamById = async id => {
	const data = await client.query(`SELECT * FROM TEAMS WHERE teams.id = ${id}`);
	return data.rows[0];
};

const getTeamsByUserId = async user_Id => {
	const data = await client.query("SELECT * FROM teams");
	const rows = data.rows;
	const filteredData = rows.filter(team => team.user_Id === +user_Id);
	return filteredData;
	// return db("teams").where({ user_Id });
};

const makeTeam = async (userId, teamName) => {
	// const id = await client.query("SELECT id from teams ORDER BY id DESC");
	// const teamsId = id.rows[0].id + 1;
	const query = {
		text: "INSERT INTO teams (team_name, user_Id) VALUES($1, $2) RETURNING teams.id",
		values: [teamName, userId],
	};
	const data = await client.query(query);
	return data.rows[0];
	
};

const updateTeamName = async (id, team_name) => {
	const query = {
		text: "UPDATE teams SET team_name = $1 WHERE Id = $2 RETURNING *",
		values: [team_name, id],
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
	updateTeamName,
	removeTeam,
};
