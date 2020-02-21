const Category = require('../src/models/categories');
const categories = new Category();
const Product = require('../src/models/products');
const products = new Product()

function getModel(request, response, next) {
    const model = request.params.model;
    switch (model) {
        case 'categories':
            request.model = categories;
            next();
            break;
        case 'products': 
            request.model=products;
            next();
            break;
        default:
            throw new Error('invalid model')
    }
   
}

function handleGetAll(request, response, next) {
    request.model.read()
    .then(result => {
        const output = {
            count: result.length,
            data: result
        }
        response.status(200).json(output)
    })
    .catch(next)
}

function handleGetOne (request, response, next) {
    request.model.read(request.params.id)
        .then(results => {
            response.status(200).json(results)
        })
        .catch(next)
}

function handlePost (request, response, next) {
    request.model.create(request.body)
        .then(results => {
            response.status(200).json(results)
        })
        .catch(next)
}

function handleUpdate(request, response, next) {
    request.model.update(request.params.id, request.body)
        .then(results => {
            response.status(200).json(results)
        })
        .catch(next)
}

function handleDelete(request, reponse, next) {
    request.model.delete(request.params.id)
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
    handleDelete,
    getModel
}