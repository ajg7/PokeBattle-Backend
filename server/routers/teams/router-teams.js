const express = require("express");
const router = express.Router();
const Teams = require("./model-teams")


router.get("/:userId", (request, response) => {
    const { userId } = request.params;
    Teams.findById(userId)
        .then(team => {
            response.status(200).json({ teamId: team.id, userId: userId});
        })
        .catch(error => {
            response.status(400).json({ error: error.message })
        })
})

router.post("/", (request, response) => {
    const { userId } = request.jwt
    console.log(userId)
    Teams.add(userId)
        .then(team => {
            console.log(team)
            response.status(201).json({ data: {user_Id: userId, team_Id: team[0]} })
        })
        .catch(error => {
            response.status(400).json({ error: error.message })
        })
})

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