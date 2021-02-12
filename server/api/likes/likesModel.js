const client = require("../../../db-config");

const getAllLikes = async () => {
    const data = await client.query("SELECT * FROM likes");
    return data.rows;
};


module.exports = {
    getAllLikes
};