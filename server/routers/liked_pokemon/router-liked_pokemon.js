const express = require("express");
const router = express.Router();
const LikedPokemon = require("./model-liked_pokemon");

router.get("/", (request, response) => {
    console.log(request.jwt)
    const { userId } = request.jwt;
    console.log(userId, "hi")
    LikedPokemon.getLikedData(userId)
        .then(pokemon => {
            console.log(pokemon)
            response.status(200).json(pokemon)
        })
        .catch(error => {
            response.status(404).json({ error: error.message })
        })
})

module.exports = router;