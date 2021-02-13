const router = require("express").Router();
const TeamMembers = require("./teamMembersModel");

router.post("/:pokemonId", async (request, response) => {
	const { teamId } = request.body;
	const { pokemonId } = request.params;
	console.log(teamId);
	try {
		const data = await TeamMembers.addPokemonToTeam(teamId, pokemonId);
		response.status(201).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.delete("/removePokemon/:teamId/:pokemonId", async (request, response) => {
	const { pokemonId, teamId } = request.params;
	try {
		const data = await TeamMembers.removePokemonInTeam(teamId, pokemonId);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.put("/nickname/:pokemonId", async (request, response) => {
	const { pokemonId } = request.params;
	const { teamId, nickname } = request.body;
	try {
		const data = await TeamMembers.updateNickName(teamId, pokemonId, nickname);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.get("/data/:userId", async (request, response) => {
	const { userId } = request.params;
	try {
		const data = await TeamMembers.getPokemonData(userId);
		const entries = Array.from(data.entries());
		response.status(200).json(entries);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.get("/getPokemon/:teamId", async (request, response) => {
	const { teamId } = request.params;
	try {
		const data = await TeamMembers.getPokemonInTeam(teamId);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

module.exports = router;
