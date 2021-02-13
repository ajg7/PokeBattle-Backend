const client = require("../../../db-config");

const getAllTypes = async () => {
	const data = await client.query("SELECT DISTINCT type1 AS type FROM pokemon ORDER BY type1");
	return data.rows;
};

const makeABattle = async (user_Id, team_Id, player_score, challenger_score) => {
	const query = {
		text:
			"INSERT INTO battles (user_Id, team_Id, player_score, challenger_score) VALUES ($1, $2, $3, $4) RETURNING id",
		values: [user_Id, team_Id, player_score, challenger_score],
	};
	const data = await client.query(query);
	return data.rows[0];
};

const updateScores = async (id, playerScore, challengerScore) => {
	const query = {
		text:
			"UPDATE battles SET player_score = $1, challenger_score = $2 WHERE id = $3 RETURNING id",
		values: [playerScore, challengerScore, id],
	};
	const data = await client.query(query);
	return data.rows[0];
};

const getScoresByUserId = async user_Id => {
	const data = await client.query(`SELECT * from battles WHERE user_Id = ${user_Id}`);
	return data.rows;
};

const getScoresByTeamId = async team_Id => {
	const data = await client.query(`SELECT * from battles WHERE team_Id = ${team_Id}`);
	return data.rows;
};

module.exports = {
	getAllTypes,
	makeABattle,
	updateScores,
	getScoresByUserId,
	getScoresByTeamId,
};
