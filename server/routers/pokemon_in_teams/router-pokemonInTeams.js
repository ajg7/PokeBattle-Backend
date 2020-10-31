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

router.put("/:pokemonId", (request, response) => {
    const { pokemonId } = request.params;
    PokemonTeams.update(pokemonId, request.body)
        .then(changes => {
            if(changes) {
                response.status(200).json({ nickname: changes })
            } else {
                response.status(400).json({ error: error.message })
            }
        })
        .catch(error => {
            response.status(500).json({error: error.message})
        })
})

router.delete("/:pokemonId", (request, response) => {
    const { pokemonId } = request.params;
    PokemonTeams.remove(pokemonId)
        .then(confirmation => {
            PokemonTeams.find()
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