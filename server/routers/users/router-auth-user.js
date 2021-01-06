const express = require("express");
const router = express.Router();
const Users = require("./model-user");

//Deleting a User
router.delete("/:id", (request, response) => {
    const { id } = request.params;
    Users.remove(id)
        .then(confirmation => {
            response.status(200).json({ confirmation: `${id} has been deleted` });
        })
        .catch(error => {
            response.status(400).json({ error: error.message });
        })
})


module.exports = router;