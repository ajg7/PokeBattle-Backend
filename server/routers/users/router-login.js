const express = require("express");
const bcryptjs = require("bcryptjs");
const Users = require("./model-user");
const { isValid } = require("../../auth/service-users");
const router = express.Router();
const tokenHelper = require("./tokenHelper");

// Login
router.post("/", (request, response) => {
    const { email, password } = request.body;
    if(isValid(request.body)) {
        Users.findBy({ email: email })
            .then(([user]) => {
                if(user && bcryptjs.compareSync(password, user.password)) {
                    const token = tokenHelper.getJwt(user);
                    response.status(200).json({ message: "Welcome!", token, userId: user.id })
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