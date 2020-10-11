const express = require("express");
const helmet = require("helmet");
const PokemonMemberRouter = require("../routers/router-pokemonMembers");


const server = express();
server.use(helmet());
server.use(express.json());
server.use("/pokemon_team_members", PokemonMemberRouter);


server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!!!!!"});
})



module.exports = server;