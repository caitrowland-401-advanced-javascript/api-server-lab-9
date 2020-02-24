function notFoundErrorHandler (request, response, next){ 
    response.status(404).json({error: 'resource not found'})
    .catch(next)
}

module.exports = notFoundErrorHandler