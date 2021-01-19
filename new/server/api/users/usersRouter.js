const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const { isValid } = require("../../library/isValidChecker");
const tokenHelper = require("../../library/tokenHelper");
const { sendError } = require("../../library/errorHandler");
const Users = require("./usersModel");

router.post("/login", (request, response) => {
	const { email, password } = request.body;
	if (isValid(request.body)) {
		Users.findBy({ email: email })
			.then(([user]) => {
				if (user && bcryptjs.compareSync(password, user.password)) {
					const token = tokenHelper.getJwt(user);
					response.status(200).json({ message: "Welcome!", token, userId: user.id });
				} else {
					response.status(400).json({ message: "Invalid Characters" });
				}
			})
			.catch(error => sendError(response, error, "Login"));
	} else {
		response.status(400).json({ message: "Please Provide Email and Password" });
	}
});

module.exports = router;
