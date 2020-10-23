
module.exports = (request, response, next) => {
    const { email, userId } = request.jwt
    if(request.jwt === undefined) {
        response.status(400).json({ message: "please enter email and password" })
    } else if (email === undefined) {
        response.status(400).json({ message: "please enter email" })
    } else if (userId === undefined) {
        response.status(400).json({ message: "please enter password"})
    } else {
        next();
    }
}