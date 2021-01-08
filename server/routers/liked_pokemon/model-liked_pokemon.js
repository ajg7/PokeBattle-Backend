const db = require("../../data/db-config");

const getLikedData = user_Id => {
    return db("liked_pokemon")
            // .join("teams as T", "T.user_Id", "=", "LP.user_Id")
            // .join("pokemon as P", "P.id", "=", "LP.pokemon_Id")
            // .select("LP.pokemon_Id", "LP.user_Id", "T.id as team_Id", "P.name")
            // .where({ user_Id });
}

module.exports ={
    getLikedData
}