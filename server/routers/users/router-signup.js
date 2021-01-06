const express = require("express");
const bcryptjs = require("bcryptjs");
const Users = require("./model-user");
const router = express.Router();
const tokenHelper = require("./tokenHelper");

// Signup
router.post("/", (request, response) => {
    const credentials = request.body;
    const rounds = process.env.BCRYPT_ROUNDS || 7;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;
    const token = tokenHelper.getJwt(credentials)
    Users.register(credentials)
        .then(result => {
            response.status(201).json({ token })
        })
        .catch(error => {
            response.status(500).json({ error: error.message })
        })
})




module.exports = router;