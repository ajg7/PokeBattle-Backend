const express = require("express");
const router = express.Router();
const PokemonTeams = require("./model-team_members");

// Returns all members of a specific team
router.get("/:teamId", (request, response) => {
    const { teamId } = request.params;
    PokemonTeams.findByTeamId(teamId)
        .then(data => {
            PokemonTeams.getPokemonData(teamId)
                .then(newData => {
                    response.status(200).json(newData)
                })
                .catch(error => {
                    response.status(500).json({error: error.message})
                })
        })
        .catch(error => {
            response.status(500).json({ error: error.message })
        })
})

// Add a pokemon to a specific team
router.post("/:pokemonId", (request, response) => {
    const { userId } = request.jwt;
    const { pokemonId } = request.params;
    PokemonTeams.findByUserId(userId)
        .then(teams => {
            PokemonTeams.findByTeamId(teams.id)
                .then(pokemon => {
                    PokemonTeams.add(pokemonId, teams.id)
                        .then(pokemonTeam => {
                            console.log(pokemonTeam)
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
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({ error: error.message })
        })
})


// Users can make a nickname for a team member
router.put("/:pokemonId", (request, response) => {
    const { pokemonId } = request.params;
    PokemonTeams.update(pokemonId, request.body)
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

// Users can delete a pokemon from the team
router.delete("/:pokemonId", (request, response) => {
    const { pokemonId } = request.params;
    PokemonTeams.remove(pokemonId)
        .then(confirmation => {
            response.status(200).json({message: "pokemon has been deleted"})
        })
        .catch(error => {
            response.status(404).json({ error: error.message })
        })
})

module.exports = router;