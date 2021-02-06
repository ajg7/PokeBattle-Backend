const router = require("express").Router();
const { crudOps } = require("../../library");
const Pokemon = require("./pokemonModel");

router.get("/", (request, response) => {
	crudOps.getAll(response, Pokemon.getAllPokemon, "Pokemon");
});

router.get("/search", async (request, response) => {
	const { pokemon } = request.query;
	try {
		const data = await Pokemon.getPokemonByName(pokemon);
		response.status(200).json(data);
	} catch (error) {
		response.status(404).json({ message: "Invalid entry" });
	}
});

// Returns Pokemon by their Type
router.get("/search/type", async (request, response) => {
	const { type } = request.query;
	try {
		const data = await Pokemon.getPokemonByType(type);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

// Returns Pokemon Sorted Alphabetically (A - Z)
router.get("/asc", async (request, response) => {
	try {
		const data = await Pokemon.getPokemonAlphabetically();
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

// Returns Pokemon Sorted Reverse Alphabetically (Z - A)
router.get("/desc", async (request, response) => {
	try {
		const data = await Pokemon.getPokemonReverseAlphabetically();
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

router.get("/status", async (request, response) => {
	const { status } = request.query;
	try {
		const data = await Pokemon.getPokemonByStatus(status);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

// Returns Pokemon Sorted by Weight
router.get("/weight", async (request, response) => {
	// Weight is either asc or desc
	const { weight } = request.query;
	let order;
	weight === "lightest" ? (order = "asc") : (order = "desc");
	console.log(request.query, order);
	try {
		const data = await Pokemon.getPokemonByWeight(order);
		response.status(200).json(data);
	} catch (error) {
		sendError(response, error, "Pokemon Sorted By Weight");
	}
});

// Returns Pokemon Sorted by Height
router.get("/height", async (request, response) => {
	//Height is either asc or desc
	const { height } = request.query;
	let order;
	height === "shortest" ? (order = "asc") : (order = "desc");
	try {
		const data = await Pokemon.getPokemonByHeight(order);
		response.status(200).json(data);
	} catch (error) {
		sendError(response, error, "Pokemon Sorted By Height");
	}
});

// Returns Pokemon Sorted by Habitat
router.get("/habitat", async (request, response) => {
	const { habitat } = request.query;
	try {
		const data = await Pokemon.getPokemonByHabitat(habitat);
		response.status(200).json(data);
	} catch (error) {
		sendError(response, error, "Pokemon Sorted By Habitat");
	}
});

module.exports = router;
