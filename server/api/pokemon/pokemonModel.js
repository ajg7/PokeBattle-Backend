const db = require("../../db/db-config");
const client = require("../../../db-config");
// client.connect();

// Get All Pokemon
const getAllPokemon = async () => {
	const data = await client.query("SELECT * FROM pokemon");
	return data.rows;
};

// Get Pokemon by Their Name
const getPokemonByName = async pokemonName => {
	const query = {
		text: "SELECT * FROM pokemon WHERE name = $1",
		values: [pokemonName],
	};
	const data = await client.query(query);
	return data.rows[0];
};

// Get Pokemon by their type
const getPokemonByType = async type => {
	const query = {
		text: "SELECT * FROM pokemon WHERE type1 = $1 OR type2 = $1 ORDER BY name",
		values: [type],
	};
	const data = await client.query(query);
	return data.rows;
};

// Get Pokemon in A - Z ordering
const getPokemonAlphabetically = async () => {
	const data = await client.query("SELECT * FROM pokemon ORDER BY name");
	return data.rows;
};

// Get Pokemon in Z - A ordering
const getPokemonReverseAlphabetically = async () => {
	const data = await client.query("SELECT * FROM pokemon ORDER BY name DESC");
	return data.rows;
};

// Get Pokemon by Legendary, Ancient, or Mythical Status
const getPokemonByStatus = async status => {
	const data = await client.query(`SELECT * FROM pokemon WHERE ${status} = true ORDER BY name`);
	return data.rows;
};

// Order Pokemon by their Weight
const getPokemonByWeight = async order => {
	const data = await client.query(`SELECT * FROM pokemon ORDER BY weight ${order}`);
	return data.rows;
};

// Order Pokemon by their Height
const getPokemonByHeight = async order => {
	const data = await client.query(`SELECT * FROM pokemon ORDER BY height ${order}`);
	return data.rows;
};

// Order Pokemon by their Habitat
const getPokemonByHabitat = async habitat => {
	const query = {
		text: "SELECT * FROM pokemon WHERE habitat = $1 ORDER BY name",
		values: [habitat],
	};
	const data = await client.query(query);
	return data.rows;
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
