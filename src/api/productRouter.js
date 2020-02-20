const express = require('express');
const Product = require('../models/products')
const products = new Product();

const router = express.Router();

router.get('/products', getAllProducts)
router.get('/products/:id', getOneProduct)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

function getAllProducts (request, response, next) { 
    products.read()
        .then(results => {
            const output = {
            count: results.length,
            data: results
        }
        response.status(200).json(output)
    })
    .catch(next)
}

function getOneProduct(request, response, next) {
    products.read(request.params.id)
        .then(results => {
            response.status(200).json(results)
        })
        .catch(next)
}

function createProduct(request, response, next) {
    products.create(request.body) 
        .then(results => {
            response.status(201).json(results)
        })
        .catch(next)
}

function updateProduct(request, response, next) {
    products.update(request.params.id, request.body)
        .then(results => {
            response.status(200).json(results)
        })
        .catch(next)
}

function deleteProduct(request, response, next) { 
    products.delete(request.params.id)
        .then(results => {
            response.status(202).json(results)
        })
        .catch(next)
}

module.exports = router;