const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (request, response) => {
	response.status(200).json({ Frankenstein: "It's alive!!!!!", timeStamp: Date.now() });
});

module.exports = server;
