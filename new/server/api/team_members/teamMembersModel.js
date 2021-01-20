const db = require("../../db/db-config");

const addPokemonToTeam = (team_Id, pokemon_Id) => {
	return db("team_members")
		.where({ team_Id })
		.insert({ pokemon_Id, team_Id })
		.returning("team_Id");
};

const removePokemonInTeam = (team_Id, pokemon_Id) => {
	return db("team_members").where({ team_Id, pokemon_Id }).del();
};

const updateNickName = (team_Id, pokemon_Id, nickname) => {
	return db("team_members").where({ team_Id, pokemon_Id }).update({ nickname });
};

const getPokemonData = team_Id => {
	return db("team_members as TM")
		.join("pokemon as P", "P.id", "=", "TM.pokemon_Id")
		.where({ team_Id })
		.limit(6);
};

module.exports = {
	addPokemonToTeam,
	removePokemonInTeam,
	updateNickName,
	getPokemonData,
};
