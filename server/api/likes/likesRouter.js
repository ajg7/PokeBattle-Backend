const router = require("express").Router();
const Likes = require("./likesModel");


router.get("/", async (request, response) => {
    try {
        const data = await Likes.getAllLikes();
        response.status(200).json(data);
    }
    catch (error) {
        response.status(500).json({error: error.message});
    }
});

router.post("/:pokemonId", async (request, response) => {
    const { pokemonId } = request.params;
    const { userId } = request.body;
    try {
        const data = await Likes.like(userId, pokemonId);
        response.status(201).json(data);
    }

    catch (error) {
        response.status(500).json({ error: error.message });
    }
});

router.delete("/:pokemonId", async (request, response) => {
    const { pokemonId } = request.params;
    const { userId } = request.body;
    try {
        const data = await Likes.unlike(userId, pokemonId);
        response.status(200).json(data);
    }

    catch (error) {
        response.status(500).json({ error: error.message });
    }
});

module.exports = router;