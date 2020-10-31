module.exports = {
    find,
    findById,
    add,
    remove
}

const db = require("../../data/db-config");

function find() {
    return db("teams")
}

function findById(id) {
    return db("teams").where({ id }).first()
}

function add(user_Id) {
    return db("teams").insert({user_Id: user_Id})
}

function remove(id) {
    return db("teams").where({ id }).del();
}

