const db = require("../../db/db-config");

const getAllTypes = () => {
	return db("pokemon").orderBy("type1").distinct("type1");
};

module.exports = {
	getAllTypes,
};
