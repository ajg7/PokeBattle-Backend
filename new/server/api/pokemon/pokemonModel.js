const db = require("../../db/db-config");

// Get All Pokemon
const getAllPokemon = () => {
	return db("pokemon");
};

//Get a Specific Pokemon
const getPokemonById = id => {
	return db("pokemon").where({ id });
};

// Get Pokemon by their type
const getPokemonByType = type => {
	return db("pokemon").where({ type1: type }).orWhere({ type2: type }).orderBy("name");
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

module.exports = {
	getAllPokemon,
	getPokemonById,
	getPokemonByType,
	getPokemonAlphabetically,
	getPokemonReverseAlphabetically,
	getPokemonByStatus,
	getPokemonByWeight,
	getPokemonByHeight,
};
