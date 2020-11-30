module.exports = {
    add,
    find,
    findByUserId, 
    getPokemonData,
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

function find(team_Id) {
    return db("pokemon_in_teams").where({ team_Id });
}

function findByUserId(user_Id) {
    return db("teams").where({ user_Id }).first();
}

function getPokemonData(team_Id) {
    return db("pokemon_in_teams")
        .join("pokemon", "pokemon_in_teams.pokemon_Id", "=", "pokemon.id")
        .select("pokemon_in_teams.pokemon_Id", "pokemon_in_teams.team_Id", "pokemon_in_teams.nickname", "pokemon.name", "pokemon.type1", "pokemon.type2", "pokemon.imgURL",
        "pokemon.ancient", "pokemon.legendary", "pokemon.mythical")
        .where({ team_Id })
}

function update(pokemon_Id, changes) {
    //Might need to change back to the primary key
    return db("pokemon_in_teams").where({ pokemon_Id }).update(changes)
}

function remove(pokemon_Id) {
    return db("pokemon_in_teams").where({ pokemon_Id }).del();
}

//Next need to create a function that will join pokemon_in_teams with pokemon table, so we can access the data