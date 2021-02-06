const server = require("./server/api/server");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 9000;

server.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
