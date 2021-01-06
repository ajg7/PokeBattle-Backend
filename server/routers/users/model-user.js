const db = require("../../data/db-config");


// Signup
/*
Need to post body to the db that includes email and a hashed password
*/
const register = newUser => db("users").insert(newUser);

const findById = id => db("users").where({ id }).first();

const find = () => db("users").where({ id }).first();

const findBy = filter => db("users").where(filter).orderBy("id");

module.exports = {
    register,
    findById,
    find,
    findBy
}