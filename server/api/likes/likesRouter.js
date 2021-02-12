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

module.exports = router;