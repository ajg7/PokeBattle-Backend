const db = require("../../db/db-config");
const client = require("../../../db-config");

const getAllTypes = async () => {
	const data = await client.query("SELECT DISTINCT type1 FROM pokemon ORDER BY type1");
	return data.rows;
};

const makeABattle = async (user_Id, team_Id, player_score, challenger_score) => {
	return db("battles")
		.insert({ user_Id, team_Id, player_score, challenger_score })
		.returning("id");
};

const updateScores = async (id, scores) => {
	return db("battles").where({ id }).update(scores).returning("id");
};

const getScoresByUserId = async user_Id => {
	return db("battles")
		.where({ user_Id })
		.select("id", "team_Id", "player_score", "challenger_score");
};

const getScoresByTeamId = async team_Id => {
	return db("battles").where({ team_Id });
};

module.exports = {
	getAllTypes,
	makeABattle,
	updateScores,
	getScoresByUserId,
	getScoresByTeamId,
};
