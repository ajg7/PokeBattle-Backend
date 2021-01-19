const jwt = require("jsonwebtoken");
const secrets = require("../library/secrets");

const getJwt = user => {
	const payload = {
		email: user.email,
	};
	const secret = secrets.jwtSecret;
	const options = {
		expiresIn: "5h",
	};
	return jwt.sign(payload, secret, options);
};

module.exports = {
	getJwt,
};
