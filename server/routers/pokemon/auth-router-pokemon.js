const express = require("express");
const Pokemon = require("./model-pokemonMembers");
const router = express.Router();


router.post("/", (request, response) => {
    const pokemonData = request.body;
    Pokemon.add(pokemonData)
        .then(ids => {
            response.status(201).json({ created: ids[0] })
        })
        .catch(error => {
            response.status(500).json({ message: error.message })
        }) 
})

router.put("/:id", (request, response) => {
    const { id } = request.params;

    Pokemon.update(id, request.body)
        .then(changes => {
            if(changes) {
                response.status(200).json({id: id})
            } else {
                response.status(400).json({ message: `${id} doesn't exist` })
            }
        })
        .catch(error => {
            response.status(500).json({message: error.message})
        })
})

router.delete("/:id", (request, response) => {
    const { id } = request.params;
    Pokemon.remove(id)
        .then(result => {
            if (result === 1) {
                response.status(200).json({id: id})
            } else {
                response.status(400).json({message: `{id} does not exist`})
            }
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({ message: error.message })
        })
})