const server = require("./server/api/server");

const port = process.env.PORT || 7000;

server.listen(port, () => {
    console.log(`Listening on port ${PORT}...`);
});