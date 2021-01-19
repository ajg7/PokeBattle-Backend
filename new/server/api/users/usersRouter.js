const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const { isValid } = require("../../library/isValidChecker");
const tokenHelper = require("../../library/tokenHelper");
const { sendError } = require("../../library/errorHandler");
const Users = require("./usersModel");

// Login
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

// Signup
router.post("/signup", (request, response) => {
	const credentials = request.body;
	const rounds = process.env.BCRYPT_ROUNDS || 7;
	const hash = bcryptjs.hashSync(credentials.password, rounds);
	credentials.password = hash;
	const token = tokenHelper.getJwt(credentials);
	Users.register(credentials)
		.then(userId => {
			response.status(201).json({ token, userId: userId[0] });
		})
		.catch(error => {
			sendError(response, error, "Signup");
		});
});

// Delete Account
router.delete("/removeUser/:id", async (request, response) => {
	const { id } = request.params;
	const data = await Users.removeUser(id);
	if (data) response.status(200).json(data);
	else sendError(response, new Error(), "Delete Account");
});

module.exports = router;
