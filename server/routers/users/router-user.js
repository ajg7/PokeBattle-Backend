const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../../auth/secrets");
const Users = require("./model-user");
const { isValid } = require("../../auth/service-users");
const router = express.Router();


function getJwt(user) {
    const payload = {
        email: user.email,
        userId: user.id
    }
    const secret = secrets.jwtSecret;
    const options = {
        expiresIn: "5h"
    }
    return jwt.sign(payload, secret, options);
}

router.post("/signup", (request, response) => {
    const credentials = request.body;
    const rounds = process.env.BCRYPT_ROUNDS || 7;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;

    Users.add(credentials)
        .then(user => {
            response.status(201).json({ data: user })
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({ error: error.message })
        })
})

router.post("/login", (request, response) => {
    const { email, password } = request.body;
    if(isValid(request.body)) {
        Users.findBy({ email: email })
            .then(([user]) => {
                if(user && bcryptjs.compareSync(password, user.password)) {
                    const token = getJwt(user);
                    response.status(200).json({ message: "Welcome!", token })
                } else {
                    response.status(400).json({ message: "Invalid Characters" })
                }
            })
            .catch(error => {
                response.status(500).json({ message: error.message })
            })
    } else {
        response.status(400).json({ message: "Please Provide Email and Password" })
    }
})

module.exports = router;