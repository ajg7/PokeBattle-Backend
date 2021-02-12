const client = require("../../../db-config");

const getAllLikes = async () => {
    const data = await client.query("SELECT * FROM likes");
    return data.rows;
};

const like = async (userId, pokemonId) => {
    const query = {
        text: "INSERT INTO likes (pokemon_Id, user_Id) VALUES ($1, $2)",
        values: [pokemonId, userId]
    };

    const data = await client.query(query);
    return data;
};

const unlike = async (userId, pokemonId) => {
    const query = {
        text: "DELETE FROM likes WHERE user_Id = $1 AND pokemon_Id = $2",
        values: [userId, pokemonId]
    };

    const data = await client.query(query);
    return data;
};


module.exports = {
    getAllLikes,
    like,
    unlike
};