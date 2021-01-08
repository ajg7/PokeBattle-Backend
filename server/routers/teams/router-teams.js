const express = require("express");
const router = express.Router();
const Teams = require("./model-teams")

// Returns teams made by a specific user
router.get("/:userId", (request, response) => {
    const { userId } = request.params;
    Teams.findByUserId(userId)
        .then(team => {
            response.status(200).json({ teamData: team });
        })
        .catch(error => {
            response.status(400).json({ error: error.message })
        })
})

// Makes a team
router.post("/", (request, response) => {
    const { userId, teamName } = request.body
    Teams.add(userId, teamName)
        .then(team => {
            console.log(team)
            response.status(201).json({ data: {user_Id: userId, team_Id: team[0]} })
        })
        .catch(error => {
            response.status(400).json({ error: error.message })
        })
})

// Edit team name
router.put("/:teamId", (request, response) => {
    const { teamId } = request.params;
    const body = request.body;

    Teams.update(teamId, body.team_name)
        .then(change => {
            console.log(change)
            response.status(200).json({confirmation: change, newTeamName: body.team_name})
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({error: error.message})
        })

})

// Deletes a team
router.delete("/:id", (request, response) => {
    const { id } = request.params;
    Teams.remove(id)
        .then(confirmation => {
            Teams.find()
                .then(newList => {
                    response.status(200).json({confirmation: confirmation, updatedList: newList})
                })
                .catch(error => {
                    response.status(500).json({ error: error.message })
                })
        })
        .catch(error => {
            response.status(404).json({ error: error.message })
        })
})


module.exports = router;