const db = require("../../db/db-config");

const addPokemonToTeam = (team_Id, pokemon_Id) => {
	return db("team_members").where({ team_Id }).insert({ pokemon_Id });
};

const getPokemonInTeam = team_Id => {
	return db("team_members").where({ team_Id });
};

const getPokemonInTeamById = (team_Id, pokemon_Id) => {
	return db("team_members").where({ team_Id, pokemon_Id });
};

const removePokemonInTeam = (team_Id, pokemon_Id) => {
	return db("team_members").where({ team_Id, pokemon_Id }).del();
};

const updatePokemonInTeam = (team_Id, pokemon_Id, newPokemonId) => {
	return db("team_members").where({ team_Id, pokemon_Id }).insert({ pokemon_Id: newPokemonId });
};

const updateNickName = (team_Id, pokemon_Id, nickname) => {
	return db("team_members").where({ team_Id, pokemon_Id }).insert({ nickname });
};

module.exports = {
	addPokemonToTeam,
	getPokemonInTeam,
	getPokemonInTeamById,
	removePokemonInTeam,
	updatePokemonInTeam,
	updateNickName,
};
