const router = require("express").Router();
const Battle = require("./battleModel");

router.get("/types", async (request, response) => {
	try {
		const types = await Battle.getAllTypes();
		response.status(200).json(types);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

router.post("/", async (request, response) => {
	const { userId, teamId, playerScore, challengerScore } = request.body;
	try {
		const battleId = await Battle.makeABattle(userId, teamId, playerScore, challengerScore);
		response.status(201).json(battleId);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

router.put("/:id", async (request, response) => {
	const { id } = request.params;
	const scores = request.body;
	try {
		const battleId = await Battle.updateScores(id, scores);
		response.status(204).json(battleId);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

router.get("/user", async (request, response) => {
	const { userId } = request.query;
	try {
		const scores = await Battle.getScoresByUserId(userId);
		response.status(200).json(scores);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

router.get("/battles/:teamId", async (request, response) => {
	const { teamId } = request.params;
	try {
		const data = await Battle.getScoresByTeamId(teamId);
		response.status(200).json(data);
	} catch (error) {
		response.status(500).json(error.message);
	}
});

module.exports = router;
