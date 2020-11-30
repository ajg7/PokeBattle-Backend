const express = require("express");
const router = express.Router();
const PokemonTeams = require("./model-pokemon_in_teams");

router.get("/:teamId", (request, response) => {
    const { teamId } = request.params;
    PokemonTeams.find(teamId)
        .then(data => {
            console.log(data[0].pokemon_Id)
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

router.post("/:pokemonId", (request, response) => {
    const { userId } = request.jwt;
    const { pokemonId } = request.params;
    // Use user id to get the id from the teams table, and then insert it into the add function
    PokemonTeams.findByUserId(userId)
        .then(teams => {
            PokemonTeams.find(teams.id)
                .then(pokemon => {
                    // console.log(pokemon.length)
                    // let count = 0;
                    // pokemon.forEach(member => {
                    //     if (teams.id === member.team_Id) count++
                    // })
                    // if (count < 6) {
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
                    // } else {
                    //     response.status(400).json({ error: "Limited to Six"})
                    // }
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
                response.status(200).json({ confirmation: changes, nickname: request.body.nickname })
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
            response.status(200).json({message: "pokemon has been deleted"})
        })
        .catch(error => {
            response.status(404).json({ error: error.message })
        })
})

module.exports = router;