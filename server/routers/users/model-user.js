module.exports = {
    add,
    findBy,
    findById,
    update,
    remove
}

const db = require("../../data/db-config")

function add(newUser) {
    return db("users").insert(newUser)
        .then(ids => {
            const id = ids[0];
            return findById(id);
        })
}

function findBy(filter) {
    return db("users").where(filter).orderBy("id");
}

function findById(id) {
    return db("users").where({ id }).first();
}

function update(id, changes) {
    return db("users").where("id", "=", id).update(changes)
}

function remove(id) {
    return db("users").where({ id }).del();
}