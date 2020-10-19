const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("Pokemon Members")
}

function findById(id) {
    return db("Pokemon Members").where("id", "=", id);
}

function add(pokemon) {
    return db("Pokemon Members").insert(pokemon, "id")
        .then(ids => {
            const id = ids[0];
            return db("Pokemon Members").where({ id }).first();
        })
}

function update(id, changes) {
    return db("Pokemon Members").where("id", "=", id).update(changes)
}

function remove(id) {
    return db("Pokemon Members").where("id", "=", id).del();
}