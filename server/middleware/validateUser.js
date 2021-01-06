
module.exports = (request, response, next) => {
    const { email, userId } = request.jwt;
    console.log(request.jwt)
    if(request.jwt === undefined) {
        response.status(400).json({ message: "please make an account" });
    } else if (email === undefined) {
        response.status(400).json({ message: "please enter email" });
    } else {
        next();
    }
}