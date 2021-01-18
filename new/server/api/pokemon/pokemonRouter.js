const router = require("express").Router();
const { crudOps } = require("../../library");
const { sendError } = require("../../library/errorHandler");

const Pokemon = require("./pokemonModel");

router.get("/", (request, response) => {
	crudOps.getAll(response, Pokemon.getAllPokemon, "Pokemon");
});

router.get("/:id", (request, response) => {
	const { id } = request.params;
	crudOps.getById(response, Pokemon.getPokemonById, "Specific Pokemon", id);
});

// Returns Pokemon by their Type
router.get("/type/:type", async (request, response) => {
	const { type } = request.params;
	try {
		const data = await Pokemon.getPokemonByType(type);
		response.status(200).json(data);
	} catch (error) {
		sendError(response, error, "Pokemon By Type");
	}
});

// Returns Pokemon Sorted Alphabetically (A - Z)
router.get("/asc", async (request, response) => {
	try {
		const data = await Pokemon.getPokemonAlphabetically();
		response.status(200).json(data);
	} catch (error) {
		sendError(response, error, "Pokemon Sorted Alphabetically");
	}
});

// Returns Pokemon Sorted Reverse Alphabetically (Z - A)
router.get("/desc", async (request, response) => {
	try {
		const data = await Pokemon.getPokemonReverseAlphabetically();
		response.status(200).json(data);
	} catch (error) {
		sendError(response, error, "Pokemon Sorted Reverse Alphabetically");
	}
});

module.exports = router;
