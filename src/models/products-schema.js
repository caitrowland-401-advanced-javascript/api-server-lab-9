const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: { type: String},
    display: { type: String},
    description: {type: String}
})

module.exports = mongoose.model('products', productSchema)