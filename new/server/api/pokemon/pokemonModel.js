const db = require("../../db/db-config");

// Get All Pokemon
const getAllPokemon = () => {
	return db("pokemon");
};

//Get a Specific Pokemon
const getPokemonById = id => {
	return db("pokemon").where({ id });
};

module.exports = {
	getAllPokemon,
	getPokemonById,
};
