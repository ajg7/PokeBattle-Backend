const router = require("express").Router();
const Teams = require("./teamsModel");

router.get("/:id", async (request, response) => {
	const { id } = request.params;
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
	const { user_Id, team_name } = request.body;
	try {
		const data = await Teams.makeTeam(user_Id, team_name);
		response.status(201).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

router.delete("/:id", async (request, response) => {
	const { id } = request.params;
	try {
		const data = await Teams.removeTeam(id);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json({ error: error.message });
	}
});

module.exports = router;
