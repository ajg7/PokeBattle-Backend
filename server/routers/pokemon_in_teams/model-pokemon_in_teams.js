module.exports = {
    add,
    find,
    findByUserId, 
    update,
    remove
}

const db = require("../../data/db-config");


/*
When a user clicks on "Make a New Team", then brings you to the pokemon cards, and adds the current id of the user to the teams table
When user clicks on "Add Pokemon to Team", it adds the id of the pokemon and the current id of the team to pokemon_in_teams
The pokemon_in_teams table and pokemon table should JOIN to get access to the pokemon table data
When you add pokemon, it will add to the team row on the next page, where you can delete a pokemon
*/

function add(pokemon_Id, team_Id) {
    return db("pokemon_in_teams").insert({pokemon_Id: pokemon_Id, team_Id: team_Id});
}

function find() {
    return db("pokemon_in_teams");
}

function findByUserId(user_Id) {
    return db("teams").where({ user_Id }).first();
}

function update(id, changes) {
    return db("pokemon_in_teams").where({ id }).update(changes)
}

function remove(pokemon_Id) {
    return db("pokemon_in_teams").where({ pokemon_Id }).del();
}

//Next need to create a function that will join pokemon_in_teams with pokemon table, so we can access the data