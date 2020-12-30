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

const update = (id, changes) => {
    return db("users").where("id", "=", id).update(changes)
}

const remove = id => {
    return db("users").where({ id }).del();
}

module.exports = {
    add,
    findBy,
    update,
    remove
}