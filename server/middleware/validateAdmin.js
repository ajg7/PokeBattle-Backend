module.exports = (response, request, next) => {
    if(request.body.username === "1khthys77_7" && request.body.password === "seven777") {
        next()
    } else {
        response.status(400).json({ message: "Not valid username or password" })
    }
}