const router = require("express").Router();
const { crudOps } = require("../../library");
const Teams = require("./teamsModel");

router.get("/:id", (request, response) => {
	const { id } = request.params;
	crudOps.getById(response, Teams.getTeamById, id);
});

router.get("/user/:userId", (request, response) => {
	const { userId } = request.params;
	crudOps.getById(response, Teams.getTeamsByUserId, userId);
});

router.post("/", (request, response) => {
	const { userId, teamName } = request.body;
	crudOps.add(response, Teams.makeTeam, userId, teamName);
});

router.put("/:id", (request, response) => {
	const { teamName } = request.body;
	const { id } = request.params;
	crudOps.update(response, Teams.updateTeamName, id, teamName);
});

router.delete("/:id", (request, response) => {
	const { id } = request.params;
	crudOps.remove(response, Teams.removeTeam, id);
});

module.exports = router;
