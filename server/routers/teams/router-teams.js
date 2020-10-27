const express = require("express");
const router = express.Router();
const Teams = require("./model-teams")


router.post("/", (request, response) => {
    const { userId } = request.jwt
    console.log(userId)
    Teams.add(userId)
        .then(team => {
            console.log(team)
            response.status(201).json({ data: team })
        })
        .catch(error => {
            response.status(400).json({ error: error.message })
        })
})


module.exports = router;