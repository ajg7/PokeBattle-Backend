const router = require("express").Router();
const { sendError } = require("../../library");
const Battle = require("./battleModel");

router.get("/types", async (request, response) => {
	try {
		const types = await Battle.getAllTypes();
		response.status(200).json(types);
	} catch (error) {
		sendError(response, error, "All Pokemon Types");
	}
});

router.post("/", async (request, response) => {
	const { userId, teamId } = request.body;
	try {
		const battleId = await Battle.makeABattle(userId, teamId);
		response.status(201).json(battleId);
	} catch (error) {
		sendError(response, error, "Make a Battle");
	}
});

router.put("/:id", async (request, response) => {
	const { id } = request.params;
	const scores = request.body;
	try {
		await Battle.updateScores(id, scores);
		response.status(204).end();
	} catch (error) {
		sendError(response, error, "Update Scores");
	}
});

router.get("/user", async (request, response) => {
	const { userId } = request.query;
	try {
		const scores = await Battle.getScores(userId);
		response.status(200).json(scores);
	} catch (error) {
		sendError(response, error, "Get Scores");
	}
});

module.exports = router;
