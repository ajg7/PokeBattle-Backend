module.exports = (response, request, next) => {
    if(request.body === undefined) {
        response.status(400).json({ message: "please enter username and password" })
    } else if (request.body.username === undefined) {
        response.status(400).json({ message: "please enter username" })
    } else if (request.body.password === undefined) {
        response.status(400).json({ message: "please enter password"})
    } else {
        next();
    }
}