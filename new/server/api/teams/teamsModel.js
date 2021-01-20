const db = require("../../db/db-config");

const getTeamById = id => {
	return db("teams").where({ id });
};

const getTeamsByUserId = async user_Id => {
	return db("teams").where({ user_Id });
};

const makeTeam = (user_Id, team_name) => {
	return db("teams").insert({ user_Id, team_name }).returning("id");
};

const updateTeamName = (id, team_name) => {
	return db("teams").where({ id }).update(team_name);
};

const removeTeam = id => {
	return db("teams").where({ id }).del();
};

module.exports = {
	getTeamById,
	getTeamsByUserId,
	makeTeam,
	updateTeamName,
	removeTeam,
};
