const express = require("express");
const router = express.Router();
const PokemonTeams = require("./model-pokemon_in_teams");



router.post("/:pokemonId", (request, response) => {
    const { userId } = request.jwt;
    const { pokemonId } = request.params;
    // Use user id to get the id from the teams table, and then insert it into the add function
    PokemonTeams.findByUserId(userId)
    .then(teams => {
        PokemonTeams.add(pokemonId, teams.id)
        .then(pokemonTeam => {
            console.log(pokemonTeam)
            response.status(201).json({ tableId: pokemonTeam, teams: teams })
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({ error: error.message })
        })
    })
    .catch(error => {
        console.log(error)
        response.status(500).json({ error: error.message })
    })
})


module.exports = router;