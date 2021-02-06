const router = require("express").Router();
const { crudOps } = require("../../library");
const Teams = require("./teamsModel");

router.get("/:id", async (request, response) => {
	const { id } = request.params;
	crudOps.getById(response, Teams.getTeamById, id);
	try {
		const data = await Teams.getTeamById(id);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.get("/user/:userId", async (request, response) => {
	const { userId } = request.params;
	try {
		const data = await Teams.getTeamsByUserId(userId);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.post("/", async (request, response) => {
	const { userId, teamName } = request.body;
	crudOps.add(response, Teams.makeTeam, userId, teamName);
	try {
		const data = await Teams.makeTeam(userId, teamName);
		response.status(201).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.put("/:id", async (request, response) => {
	const { teamName } = request.body;
	const { id } = request.params;
	crudOps.update(response, Teams.updateTeamName, id, teamName);
	try {
		const data = await Teams.updateTeamName(id, teamName);
		response.status(204).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.delete("/:id", async (request, response) => {
	const { id } = request.params;
	crudOps.remove(response, Teams.removeTeam, id);
	try {
		const data = await Teams.removeTeam(id);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

module.exports = router;
