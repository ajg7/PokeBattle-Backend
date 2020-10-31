module.exports = {
    
}

const db = require("../../data/db-config");


/*
When a user clicks on "Make a New Team", then brings you to the pokemon cards, and adds the current id of the user to the teams table
When user clicks on "Add Pokemon to Team", it adds the id of the pokemon and the current id of the team to pokemon_in_teams
The pokemon_in_teams table and pokemon table should JOIN to get access to the pokemon table data
When you add pokemon, it will add to the team row on the next page, where you can delete a pokemon
*/

