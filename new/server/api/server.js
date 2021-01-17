const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const PokemonRouter = require("./pokemon/pokemonRouter");

const server = express();

// Middleware
const logger = require("./middleware/logger");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/pokemon", logger, PokemonRouter);

server.get("/", (request, response) => {
	response.status(200).json({ Frankenstein: "It's alive!!!!!", timeStamp: Date.now() });
});

module.exports = server;
