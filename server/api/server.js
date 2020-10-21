const express = require("express");
const helmet = require("helmet");
const PokemonRouter = require("../routers/router-pokemon");


const server = express();
server.use(helmet());
server.use(express.json());
server.use("/pokemon", PokemonRouter);


server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!!!!!"});
})



module.exports = server;