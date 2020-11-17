const express = require("express");
const router = express.Router();
const PokemonTeams = require("./model-pokemon_in_teams");

router.get("/:teamId", (request, response) => {
    const { teamId } = request.params;
    PokemonTeams.find(teamId)
        .then(data => {
            response.status(200).json({ data: data })
        })
        .catch(error => {
            response.status(500).json({ error: error.message })
        })
})

router.post("/:pokemonId", (request, response) => {
    const { userId } = request.jwt;
    const { pokemonId } = request.params;
    // Use user id to get the id from the teams table, and then insert it into the add function
    PokemonTeams.findByUserId(userId)
        .then(teams => {
            PokemonTeams.add(pokemonId, teams.id)
                .then(pokemonTeam => {
                    PokemonTeams.getPokemonData(pokemonId)
                        .then(data => {
                            response.status(201).json({ id: pokemonTeam[0], team_Id: teams.id, pokemonId: pokemonId, pokemonData: data[0] })
                        })
                        .catch(error => {
                            console.log(error);
                            response.status(500).json({ error: error.message })
                        })
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

router.put("/:id", (request, response) => {
    const { id } = request.params;
    PokemonTeams.update(id, request.body)
        .then(changes => {
            if(changes) {
                response.status(200).json({ confirmation: changes, nickname: request.body.nickname })
            } else {
                response.status(400).json({ error: error.message })
            }
        })
        .catch(error => {
            response.status(500).json({error: error.message})
        })
})

router.delete("/:id", (request, response) => {
    const { id } = request.params;
    PokemonTeams.remove(id)
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