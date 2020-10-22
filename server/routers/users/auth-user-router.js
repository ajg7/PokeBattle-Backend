const express = require("express");
const Users = require("./model-user");
const router = express.Router();


router.delete("/users/:id", (request, response) => {
    const { id } = request.params;
    Users.remove(id)
        .then(deletedUser => {
            response.status(200).json({message: "user has been deleted", id: id})
        })
        .catch(error => {
            console.log(error)
            response.status(404).json({ message: error.message })
        })
})

module.exports = router;