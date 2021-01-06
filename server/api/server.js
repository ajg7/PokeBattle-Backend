const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const PokemonRouter = require("../routers/pokemon/router-pokemon");
const UserRouter = require("../routers/users/router-user");
const AuthUserRouter = require("../routers/users/router-auth-user");
const TeamRouter = require("../routers/teams/router-teams");
const LikedPokemonRouter = require("../routers/liked_pokemon/router-liked_pokemon");
const TeamMembersRouter = require("../routers/team_members/router-team_members");


const server = express();


/*####### Middleware #######*/
const logger = require("../middleware/logger");
const authenticate = require("../middleware/auth-mw");
const validateUser = require("../middleware/validateUser");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/pokemon", logger, PokemonRouter);
server.use(["/user", "users"], logger, UserRouter);
server.use(["/auth/user", "/auth/users"], logger, AuthUserRouter);
server.use("/team", logger, authenticate, validateUser, TeamRouter);
server.use("/liked", logger, authenticate, validateUser, LikedPokemonRouter);
server.use("/pokemon_team", logger, authenticate, validateUser, TeamMembersRouter);

server.get("/", (request, response) => {
    response.status(200).json({ Frankenstein: "It's alive!!!!!" });
})

module.exports = server;