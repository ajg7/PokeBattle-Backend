const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const tokenHelper = require("./tokenHelper");
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

// Change email or password

router.put("/:id", (request, response) => {
    const { id } = request.params;
    const change = request.body;
    let token = null;
    if (change.password) {
        const rounds = process.env.BCRYPT_ROUNDS || 7;
        const hash = bcryptjs.hashSync(change.password, rounds);
        change.password = hash;
        token = tokenHelper.getJwt(change)
    }
    Users.update(id, change)
        .then(confirmation => {
            response.status(200).json({ confirmation: `${id}'s credentials have been updated`, token});
        })
        .catch(error => {
            response.status(400).json({ error: error.message });
        })
})


module.exports = router;