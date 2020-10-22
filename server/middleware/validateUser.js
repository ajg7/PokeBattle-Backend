module.exports = (response, request, next) => {
    if(request.body === undefined) {
        response.status(400).json({ message: "please enter email and password" })
    } else if (request.body.email === undefined) {
        response.status(400).json({ message: "please enter email" })
    } else if (request.body.password === undefined) {
        response.status(400).json({ message: "please enter password"})
    } else {
        next();
    }
}