const db = require("../../data/db-config");

/*
When a user clicks on "Make a New Team", then brings you to the pokemon cards, and adds the current id of the user to the teams table
When user clicks on "Add Pokemon to Team", it adds the id of the pokemon and the current id of the team to team_members
The team_members table and pokemon table should JOIN to get access to the pokemon table data
When you add pokemon, it will add to the team row on the next page, where you can delete a pokemon
*/

const add = (pokemon_Id, team_Id) => {
    return db("team_members").insert({pokemon_Id: pokemon_Id, team_Id: team_Id});
}

const findByTeamId = team_Id => {
    return db("team_members").where({ team_Id });
}

const findByUserId = user_Id => {
    return db("teams").where({ user_Id }).first();
}

const getPokemonData = team_Id => {
    return db("team_members as TM")
        .join("pokemon as P", "TM.pokemon_Id", "=", "P.id")
        .select("*")
        .where({ team_Id })
}

const update = (pokemon_Id, changes) => {
    //Might need to change back to the primary key
    return db("team_members").where({ pokemon_Id }).update(changes)
}

const remove = pokemon_Id => {
    return db("team_members").where({ pokemon_Id }).del();
}

//Next need to create a function that will join team_members with pokemon table, so we can access the data

module.exports = {
    add,
    findByTeamId,
    findByUserId, 
    getPokemonData,
    update,
    remove
}