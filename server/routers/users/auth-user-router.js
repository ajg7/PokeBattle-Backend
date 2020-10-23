const express = require("express");
const Users = require("./model-user");
const router = express.Router();


router.get("/:id", (request, response) => {
    Users.findById(request.params.id)
        .then(user => {
            if(user) {
                response.status(200).json(user)
            } else {
                response.status(404).json({ message: error.message })
            }
        })
        .catch(error => {
            response.status(500).json({ error: error.message })
        })
})


router.put("/:id", (request, response) => {
    const { id } = request.params;

    Users.update(id, request.body)
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