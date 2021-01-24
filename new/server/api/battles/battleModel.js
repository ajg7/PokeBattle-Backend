const db = require("../../db/db-config");

const getAllTypes = () => {
	return db("pokemon").orderBy("type1").distinct("type1");
};

const makeABattle = (user_Id, team_Id) => {
	return db("battles").insert({ user_Id, team_Id }).returning("id");
};

const updateScores = (id, scores) => {
	return db("battles").where({ id }).update(scores);
};

const getScores = user_Id => {
	return db("battles")
		.where({ user_Id })
		.select("id", "team_Id", "player_score", "challenger_score");
};

module.exports = {
	getAllTypes,
	makeABattle,
	updateScores,
	getScores,
};
