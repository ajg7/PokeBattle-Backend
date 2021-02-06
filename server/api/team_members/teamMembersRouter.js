const router = require("express").Router();
const { crudOps } = require("../../library");
const TeamMembers = require("./teamMembersModel");

router.post("/:pokemonId", (request, response) => {
	const { teamId } = request.body;
	const { pokemonId } = request.params;
	crudOps.add(response, TeamMembers.addPokemonToTeam, "Add Pokemon to a Team", teamId, pokemonId);
});

router.delete("/removePokemon/:teamId/:pokemonId", (request, response) => {
	const { pokemonId, teamId } = request.params;
	crudOps.remove(
		response,
		TeamMembers.removePokemonInTeam,
		"Remove a Pokemon From Team",
		teamId,
		pokemonId
	);
});

router.put("/nickname/:pokemonId", async (request, response) => {
	const { pokemonId } = request.params;
	const { teamId, nickname } = request.body;
	try {
		await TeamMembers.updateNickName(teamId, pokemonId, nickname);
		response.status(204).end();
	} catch (error) {
		response.status(500).json(error.message);
	}
});

router.get("/data/:teamId", async (request, response) => {
	const { teamId } = request.params;
	try {
		const data = await TeamMembers.getPokemonData(teamId);
		const entries = Array.from(data.entries());
		response.status(200).json(entries);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

router.get("/getPokemon/:teamId", async (request, response) => {
	const { teamId } = request.params;
	try {
		const data = await TeamMembers.getPokemonInTeam(teamId);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

module.exports = router;
