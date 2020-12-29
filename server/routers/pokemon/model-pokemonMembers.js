const db = require("../../data/db-config");

const find = () => {
    return db("pokemon")
}

const findById = id => {
    return db("pokemon").where("id", "=", id);
}

const add = pokemon => {
    return db("pokemon").insert(pokemon, "id")
        .then(ids => {
            const id = ids[0];
            return db("pokemon").where({ id }).first();
        })
}

const update = (id, changes) => {
    return db("pokemon").where("id", "=", id).update(changes)
}

const remove = id => {
    return db("pokemon").where("id", "=", id).del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}