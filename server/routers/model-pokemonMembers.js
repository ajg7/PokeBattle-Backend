const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("pokemon")
}

function findById(id) {
    return db("pokemon").where("id", "=", id);
}

function add(pokemon) {
    return db("pokemon").insert(pokemon, "id")
        .then(ids => {
            const id = ids[0];
            return db("pokemon").where({ id }).first();
        })
}

function update(id, changes) {
    return db("pokemon").where("id", "=", id).update(changes)
}

function remove(id) {
    return db("pokemon").where("id", "=", id).del();
}