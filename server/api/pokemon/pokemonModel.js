const db = require("../../db/db-config");
const client = require("../../../db-config");
client.connect();

// Get All Pokemon
const getAllPokemon = async () => {
	const data = await client.query("SELECT * FROM pokemon");
	return data.rows;
};

// Get Pokemon by Their Name
const getPokemonByName = async pokemonName => {
	const query = {
		text: "SELECT * FROM pokemon WHERE name = $1",
		values: [pokemonName]
	};
	const data = await client.query(query);
	return data.rows[0];
};

// Get Pokemon by their type
const getPokemonByType = type => {
	return db("pokemon").where("type1", "=", type).orWhere("type2", "=", type).orderBy("name");
};

// Get Pokemon in A - Z ordering
const getPokemonAlphabetically = () => {
	return db("pokemon").orderBy("name");
};

// Get Pokemon in Z - A ordering
const getPokemonReverseAlphabetically = () => {
	return db("pokemon").orderBy("name", "desc");
};

// Get Pokemon by Legendary, Ancient, or Mythical Status
const getPokemonByStatus = status => {
	return db("pokemon").where(`${status}`, "=", true).orderBy("name");
};

// Order Pokemon by their Weight
const getPokemonByWeight = order => {
	return db("pokemon").orderBy("weight", `${order}`);
};

// Order Pokemon by their Height
const getPokemonByHeight = order => {
	return db("pokemon").orderBy("height", `${order}`);
};

// Order Pokemon by their Habitat
const getPokemonByHabitat = habitat => {
	return db("pokemon as P").where({ habitat }).orderBy("P.name");
};

module.exports = {
	getAllPokemon,
	getPokemonByName,
	getPokemonByType,
	getPokemonAlphabetically,
	getPokemonReverseAlphabetically,
	getPokemonByStatus,
	getPokemonByWeight,
	getPokemonByHeight,
	getPokemonByHabitat,
};
