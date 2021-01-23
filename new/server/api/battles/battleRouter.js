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

module.exports = router;
