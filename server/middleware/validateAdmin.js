const db = require("../data/db-config")

module.exports = (request, response, next) => {
    const { email } = request.jwt

    function getIsAdmin() {
        return db("users").where({isAdmin: true, email: email})
    }
    const verifyAdmin = getIsAdmin();

    verifyAdmin.then(result => {
        result[0] !== undefined ? next() : response.status(400).json({ message: "forbidden" })
    })
}