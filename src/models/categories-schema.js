const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    name: { type: String }, 
    display_name: { type: String }, 
    description: { type: String }, 
})

module.exports = mongoose.model('categories', categoriesSchema)