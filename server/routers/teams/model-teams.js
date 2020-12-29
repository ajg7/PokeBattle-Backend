const db = require("../../data/db-config");


const find = () => {
    return db("teams");
}

const findById = user_Id => {
    return db("teams").where({ user_Id }).select("id").first();
}

const add = user_Id => {
    return db("teams").insert({user_Id: user_Id});
}

const remove = id => {
    return db("teams").where({ id }).del();
}

module.exports = {
    find,
    findById,
    add,
    remove
}