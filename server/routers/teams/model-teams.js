const db = require("../../data/db-config");

const findByUserId = user_Id => db("teams").where({ user_Id }).select("id").first();

const add = user_Id => db("teams").insert({user_Id: user_Id});

const remove = id => db("teams").where({ id }).del();

module.exports = {
    findByUserId,
    add,
    remove
}