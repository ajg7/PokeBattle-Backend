const db = require("../../data/db-config")

const add = newUser => {
    return db("users").insert(newUser)
        .then(ids => {
            const id = ids[0];
            return findById(id);
        })
}

const findBy = filter => {
    return db("users").where(filter).orderBy("id");
}

const find = () => {
    return db("users")
}

const findById = id => {
    return db("users").where({ id }).first();
}

const update = (id, changes) => {
    return db("users").where("id", "=", id).update(changes)
}

const remove = id => {
    return db("users").where({ id }).del();
}

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}