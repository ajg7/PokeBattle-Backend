const express = require("express");
const Pokemon = require("./model-pokemon");
const router = express.Router();

router.get("/", (request, response) => {
    Pokemon.find()
        .then(pokemon => {
            response.status(200).json(pokemon)
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({message: error.message})
        })
})

router.get("/:id", (request, response) => {
    Pokemon.findById(request.params.id)
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


module.exports = router;