const db = require("../../data/db-config");

const register = newUser => db("users").insert(newUser);

const findById = id => db("users").where({ id }).first();

const find = () => db("users").where({ id }).first();

const findBy = filter => db("users").where(filter).orderBy("id");

const remove = id => db("users").where({ id }).del();



module.exports = {
    register,
    findById,
    find,
    findBy,
    remove
}