const express = require("express");
const Pokemon = require("./model-pokemon");
const router = express.Router();

router.get("/", async (request, response) => {
    const pokemon = await Pokemon.find();
    try {
        pokemon ? response.status(200).json(pokemon) : response.status(500).json(new Error(error.message));
    }
    catch {
        response.status(404).json(new Error(error.message))
    }
})

router.get("/:id", async (request, response) => {
    const pokemon = await Pokemon.findById(request.params.id);
    try {
        pokemon ? response.status(200).json(pokemon) : response.status(500).json(new Error(error.message));
    }
    catch {
        response.status(400).json(new Error(error.message));
    }
})

module.exports = router;