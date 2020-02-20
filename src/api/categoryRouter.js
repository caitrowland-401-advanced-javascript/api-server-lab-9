const express = require('express');
const Category = require('../models/categories');
const categories = new Category();

const router = express.Router();

router.get('/categories', getAllCategories)
router.get('/categories/:id', getOneCategory)
router.post('/categories', createCategory)
router.put('/categories/:id', editCategory)
router.delete('/categories/:id', deleteCategory)

function getAllCategories (request, response, next) {
    categories.read()
        .then(result => {
            const output = {
                count: result.length,
                data: result
            }
            response.status(200).json(output)
        })
        .catch(next)
}

function getOneCategory (request, response, next) {
    categories.read(request.params.id)
        .then(result => {
            response.status(200).json(result)
        })
        .catch(next)
}

function createCategory (request, response, next) {
    categories.create(request.body)
        .then(result => {
            response.status(201).json(result)
        })
        .catch(next)
}

function editCategory(request, response, next) { 
    categories.update(request.params.id, request.body)
        .then(result => {
            response.status(200).json(result)
        })
        .catch(next)
}

function deleteCategory(request, response, next) {
    categories.delete(request.params.id) 
        .then(result => {
            response.status(202).json(result)
        })
        .catch(next)
}

module.exports = router;
