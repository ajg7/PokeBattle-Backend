const db = require("../../db/db-config");
const client = require("../../../db-config");

const addPokemonToTeam = async (team_Id, pokemon_Id) => {
	const query = {
		text: "INSERT INTO team_members (pokemon_Id, team_Id) VALUES ($1, $2) RETURNING *",
		values: [pokemon_Id, team_Id],
	};
	const data = await client.query(query);
	return data.rows;
};

const removePokemonInTeam = async (team_Id, pokemon_Id) => {
	const query = {
		text: "DELETE FROM team_members WHERE team_Id = $1 AND pokemon_Id = $2",
		values: [team_Id, pokemon_Id],
	};
	try {
		await client.query(query);
		return `${pokemon_Id} has been deleted!`;
	} catch (error) {
		return error;
	}
};

const updateNickName = async (team_Id, pokemon_Id, nickname) => {
	const query = {
		text: "UPDATE team_members SET nickname = $1 WHERE team_Id = $2 AND pokemon_Id = $3",
		values: [nickname, team_Id, pokemon_Id],
	};
	try {
		await client.query(query);
		return `${pokemon_Id}'s nickname has been updated to ${nickname}`;
	} catch (error) {
		return error;
	}
};

const getPokemonData = async user_Id => {
	const map = new Map();

	const resultQuery = await client.query(
		`
		SELECT P.name, P.imgurl, TM.pokemon_Id, T.team_name, TM.nickname, T.id AS team_Id FROM teams AS T
		LEFT JOIN team_members AS TM
		ON TM.team_Id = T.id
		LEFT JOIN pokemon AS P
		ON TM.pokemon_Id = P.id
		WHERE user_Id = ${user_Id}
		`
	);

	for (const pokemon of resultQuery.rows) {
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
	const data = await client.query(
		`
		SELECT TM.pokemon_Id, P.name, TM.nickname, P.type1, P.type2, P.imgurl, P.number FROM team_members AS TM
		JOIN pokemon AS P
		ON P.id = TM.pokemon_Id
		WHERE team_Id = ${team_Id}
		`
	);
	return data.rows;
};

module.exports = {
	addPokemonToTeam,
	removePokemonInTeam,
	updateNickName,
	getPokemonData,
	getPokemonInTeam,
};
