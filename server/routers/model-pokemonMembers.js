const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    add,
    remove
}

function find() {
    return db("Pokemon Members")
}

function findById(id) {
    return db("Pokemon Members").where("id", "=", id);
}

function add(pokemon) {
    let length = pokemon.length;
    if (length < 6) {
        return db("Pokemon Members").insert(pokemon, "id")
        .then(ids => {
            const id = ids[0];
            return db("Pokemon Members").where({ id }).first();
        })
    } else {
        return db("Pokemon Members");
    }
}

function remove(id) {
    return db("Pokemon Members").where("id", "=", id).del();
}