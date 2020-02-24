function internalServerErrorHandler (err, request, response, next) {
    response.status(500).json({error: err.message})
    .catch(next)
}

module.exports = internalServerErrorHandler