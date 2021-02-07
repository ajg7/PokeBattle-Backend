const db = require("../../db/db-config");
const client = require("../../../db-config");

const getAllTypes = async () => {
	const data = await client.query("SELECT DISTINCT type1 AS type FROM pokemon ORDER BY type1");
	return data.rows;
};

const makeABattle = async (user_Id, team_Id, player_score, challenger_score) => {
	const id = await client.query("SELECT id from battles ORDER BY id DESC");
	const battlesId = id.rows[0].id + 1;
	const query = {
		text: "INSERT INTO battles VALUES ($1, $2, $3, $4, $5) RETURNING id",
		values: [battlesId, user_Id, team_Id, player_score, challenger_score]
	};
	const data = await client.query(query);
	return data.rows[0];
	// return db("battles")
	// 	.insert({ user_Id, team_Id, player_score, challenger_score })
	// 	.returning("id");
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
