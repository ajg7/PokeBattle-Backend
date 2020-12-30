const db = require("../../data/db-config");


// Returns all pokemon
const find = () => db("pokemon");

// Returns pokemon by id
const findById = id => db("pokemon").where("id", "=", id);

// Adds a pokemon [only to be used in testing]
const add = async pokemon => {
    const [ newPokemonId ] = await db("pokemon").insert(pokemon, "id"); 
    console.log(newPokemonId)
    await db("pokemon").where("pokemon.id", "=", newPokemonId);
}

const update = (id, changes) => {
    return db("pokemon").where("id", "=", id).update(changes)
}

const remove = id => {
    return db("pokemon").where("id", "=", id).del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}