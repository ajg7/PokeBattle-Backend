const express = require("express");
const PokemonMembers = require("./model-pokemonMembers");
const router = express.Router();

router.get("/", (request, response) => {
    PokemonMembers.find()
        .then(pokemon => {
            response.status(200).json(pokemon)
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({message: error.message})
        })
})

router.get("/:id", (request, response) => {
    PokemonMembers.findById(request.params.id)
        .then(pokemon => {
            if(pokemon) {
                response.status(200).json(pokemon)
            } else {
                response.status(404).json({ message: error.message })
            }
        })
        .catch(error => {
            response.status(500).json({ error: error.message })
        })
})

router.post("/", (request, response) => {
    const pokemonData = request.body;
    PokemonMembers.add(pokemonData)
        .then(ids => {
            response.status(201).json({ created: ids[0] })
        })
        .catch(error => {
            response.status(500).json({ message: error.message })
        })
})

module.exports = router;