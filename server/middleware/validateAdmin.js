module.exports = (response, request, next) => {
    if(request.body.isAdmin) {
        //Set it so people need a special code to get admin access
        next()
    } else {
        response.status(400).json({ message: "Not an Admin" })
    }
}