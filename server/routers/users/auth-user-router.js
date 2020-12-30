const express = require("express");
const Users = require("./model-user");
const router = express.Router();

// This is for the change email or password page
router.put("/:id", (request, response) => {
    const { id } = request.params;
    const change = request.body;
    Users.update(id, change)
        .then(changes => {
            if(changes) {
                response.status(200).json({ id: id })
            } else {
                response.status(400).json({ message: `${id} doesn't exist` })
            }
        })
        .catch(error => {
            response.status(500).json({message: error.message})
        })
})

// This is for users who want to delete their account
router.delete("/:id", (request, response) => {
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