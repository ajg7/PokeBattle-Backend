const router = require("express").Router();
const { crudOps } = require("../../library");
const sendError = require("../../library/errorHandler");
const TeamMembers = require("./teamMembersModel");

router.post("/:pokemonId", (request, response) => {
	const { teamId } = request.body;
	const { pokemonId } = request.params;
	crudOps.add(response, TeamMembers.addPokemonToTeam, "Add Pokemon to a Team", teamId, pokemonId);
});

router.delete("/removePokemon/:pokemonId", (request, response) => {
	const { pokemonId } = request.params;
	const { teamId } = request.body;
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
		sendError(response, error, "Edit Nickname");
	}
});

router.get("/data/:teamId", async (request, response) => {
	const { teamId } = request.params;
	try {
		const data = await TeamMembers.getPokemonData(teamId);
		const entries = Array.from(data.entries());
		response.status(200).json(entries);
	} catch (error) {
		sendError(response, error, "Get Pokemon Data for a Team");
	}
});

module.exports = router;
