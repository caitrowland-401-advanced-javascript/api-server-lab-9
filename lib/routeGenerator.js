function handleGetAll(type) {
    return function (request, response, next) { 
        type.read()
        .then(result => {
            const output = {
                count: result.length,
                data: result
            }
            response.status(200).json(output)
        })
        .catch(next)
    }
}

function handleGetOne (request, response, next) {
    type.read(request.params.id)
        .then(results => {
            response.status(200).json(results)
        })
        .catch(next)
}

function handlePost (request, response, next) {
    type.create(request.body)
        .then(results => {
            response.status(200).json(results)
        })
        .catch(next)
}

function handleUpdate(request, response, next) {
    type.update(request.params.id, request.body)
        .then(results => {
            response.status(200).json(results)
        })
        .catch(next)
}

function handleDelete(request, reponse, next) {
    type.delete(request.params.id)
        .then(results => {
            reponse.status(202).json(results)
        })
        .catch(next)
}

module.exports = {
    handleGetAll,
    handleGetOne,
    handlePost,
    handleUpdate,
    handleDelete
}



// function deleteCategory(request, response, next) {
//     categories.delete(request.params.id) 
//         .then(result => {
//             response.status(202).json(result)
//         })
//         .catch(next)
// }