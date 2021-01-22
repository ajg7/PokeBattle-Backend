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

const getPokemonData = async user_Id => {
	const map = new Map();
	const resultQuery = await db("teams as T")
		.leftJoin("team_members as TM", "TM.team_Id", "=", "T.id")
		.leftJoin("pokemon as P", "P.id", "=", "TM.pokemon_Id")
		.where({ user_Id })
		.select("T.id as team_Id", "TM.pokemon_Id", "P.name", "P.imgURL", "T.team_name");
	console.log(resultQuery, "dark");
	for (const pokemon of resultQuery) {
		if (map.get(pokemon.team_name) === undefined) {
			map.set(pokemon.team_name, []);
		}

		if (pokemon.id !== null) {
			map.get(pokemon.team_name).push(pokemon);
		}
	}
	console.log(map);
	return map;
};

module.exports = {
	addPokemonToTeam,
	removePokemonInTeam,
	updateNickName,
	getPokemonData,
};
