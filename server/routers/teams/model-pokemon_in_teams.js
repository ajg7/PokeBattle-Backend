module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

const db = require("../../data/db-config");

function find() {
    return db("pokemon_in_teams")
}

function findById(id) {
    return db("pokemon_in_teams").where({ id }).first()
}

function add(pokemonId) {
    return db("pokemon_in_teams").insert(pokemonId)
        .then(ids => {
            const id = ids[0];
            return findById(id);
        })
}

function remove(id) {
    return db("pokemon_in_teams").where({ id }).del();
}

function update(id, changes) {
    return db("pokemon_in_teams").where({ id }).update(changes)
}