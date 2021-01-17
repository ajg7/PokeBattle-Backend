module.exports = (request, response, next) => {
    console.log(`[${new Date().toISOString()}] ${request.method} to ${request.url} ${request.get("Origin")}`)
    next();
}