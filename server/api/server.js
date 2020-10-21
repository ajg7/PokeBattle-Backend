const express = require("express");
const helmet = require("helmet");
const PokemonRouter = require("../routers/router-pokemon");


const server = express();


// Middleware

const logger = (request, response, next) => {
    console.log(`[${new Date().toISOString()}] ${request.method} to ${request.url} ${request.get("Origin")}`)
    next();
}



server.use(helmet());
server.use(express.json());
server.use("/pokemon", logger, PokemonRouter);



server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!!!!!"});
})



module.exports = server;