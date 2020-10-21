const express = require("express");
const helmet = require("helmet");
const PokemonRouter = require("../routers/pokemon/router-pokemon");
const AuthPokemonRouter = require("../routers/pokemon/auth-router-pokemon");


const server = express();


/*####### Middleware #######*/
const logger = require("../middleware/logger");
const authenticate = require("../middleware/auth-mw");
const validateUser = require("../middleware/validateUser");
//Only admin can post, put, and delete the pokemon table
const validateAdmin = require("../middleware/validateAdmin");



server.use(helmet());
server.use(express.json());
server.use("/pokemon", logger, authenticate, validateUser, PokemonRouter);
// server.use("/pokemon/admin", logger, authenticate, validateAdmin, AuthPokemonRouter);



server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!!!!!"});
})



module.exports = server;