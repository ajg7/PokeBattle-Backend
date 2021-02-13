const db = require("../../db/db-config");
const client = require("../../../db-config");

const addPokemonToTeam = async (team_Id, pokemon_Id) => {
	console.log(team_Id);
	const query = {
		text: "INSERT INTO team_members (pokemon_Id, team_Id) VALUES ($1, $2) RETURNING *",
		values: [pokemon_Id, team_Id]
	};
	const data = await client.query(query);
	return data.rows;
	// return db("team_members")
	// 	.where({ team_Id })
	// 	.insert({ pokemon_Id, team_Id })
	// 	.returning("team_Id");
};

const removePokemonInTeam = async (team_Id, pokemon_Id) => {
	const query = {
		text: "DELETE FROM team_members WHERE team_Id = $1 AND pokemon_Id = $2",
		values: [team_Id, pokemon_Id]
	};
	const data = await client.query(query);
	console.log(data);
	return db("team_members").where({ team_Id, pokemon_Id }).del();
};

const updateNickName = async (team_Id, pokemon_Id, nickname) => {
	const query = {
		text: "UPDATE team_members SET nickname = $1 WHERE team_Id = $2 AND pokemon_Id = $3",
		values: [nickname, team_Id, pokemon_Id]
	};
	const data = await client.query(query);
	console.log(data);
	return db("team_members").where({ team_Id, pokemon_Id }).update({ nickname });
};

const getPokemonData = async user_Id => {
	const map = new Map();
	const query = {
		text: "SELECT * FROM team_members AS TM JOIN pokemon AS P ON P.id=TM.pokemon_Id"
	};
	const data = await client.query(query);
	console.log(data);
	const resultQuery = await db("teams as T")
		.leftJoin("team_members as TM", "TM.team_Id", "=", "T.id")
		.leftJoin("pokemon as P", "P.id", "=", "TM.pokemon_Id")
		.where({ user_Id })
		.select(
			"T.id as team_Id",
			"TM.pokemon_Id",
			"P.name",
			"P.imgURL",
			"T.team_name",
			"TM.nickname"
		);
	for (const pokemon of resultQuery) {
		if (map.get(pokemon.team_name) === undefined) {
			map.set(pokemon.team_name, []);
		}

		if (pokemon.id !== null) {
			map.get(pokemon.team_name).push(pokemon);
		}
	}
	return map;
};

const getPokemonInTeam = async team_Id => {
	return db("team_members as TM")
		.join("pokemon as P", "P.id", "=", "TM.pokemon_Id")
		.where({ team_Id })
		.select(
			"TM.pokemon_Id",
			"P.name",
			"TM.nickname",
			"P.type1",
			"P.type2",
			"P.imgURL",
			"P.number"
		);
};

module.exports = {
	addPokemonToTeam,
	removePokemonInTeam,
	updateNickName,
	getPokemonData,
	getPokemonInTeam,
};
