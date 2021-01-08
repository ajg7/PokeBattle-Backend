const db = require("../../data/db-config");

const findByUserId = user_Id => db("teams").where({ user_Id });

const findByTeamId = id => db("teams").where({ id });

const add = (user_Id, team_name) => db("teams").insert({user_Id: user_Id, team_name: team_name}).returning("id");

const remove = id => db("teams").where({ id }).del();

const update = (id, newTeamName) => db("teams").where({ id }).update({team_name: newTeamName});

module.exports = {
    findByUserId,
    findByTeamId,
    add,
    remove,
    update
}