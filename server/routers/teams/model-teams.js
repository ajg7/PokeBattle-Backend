const db = require("../../data/db-config");

const findByUserId = user_Id => db("teams").where({ user_Id });

const findByTeamId = id => db("teams").where({ id });

const add = (user_Id, team_name) => db("teams").insert({user_Id: user_Id, team_name: team_name});

const remove = id => db("teams").where({ id }).del();

module.exports = {
    findByUserId,
    findByTeamId,
    add,
    remove
}