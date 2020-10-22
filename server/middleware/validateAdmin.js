module.exports = (response, request, next) => {
    if(request.body.isAdmin) {
        next()
    } else {
        response.status(400).json({ message: "Not an Admin" })
    }
}