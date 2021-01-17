const router = require("express").Router();
const { crudOps } = require("../../library");

const Pokemon = require("./pokemonModel");

router.get("/", (request, response) => {
	crudOps.getAll(response, Pokemon.getAllPokemon, "Pokemon");
});

router.get("/:id", (request, response) => {
	const { id } = request.params;
	crudOps.getById(response, Pokemon.getPokemonById, "Specific Pokemon", id);
});

module.exports = router;
