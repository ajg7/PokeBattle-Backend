const db = require("../../data/db-config");


// Returns all pokemon
const find = () => db("pokemon");

// Returns pokemon by id
const findById = id => db("pokemon").where("id", "=", id);

module.exports = {
    find,
    findById
}