//3rd party resources 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { handleGetAll, handleGetOne, handlePost, handleUpdate, handleDelete, getModel} = require('../lib/routeGenerator');

//middleware
const app = express();
app.use(morgan());
app.use(express.json());
app.use(cors())


// const Category = require('./models/categories');
// const categories = new Category();
// const Product = require('./models/products');
// const products = new Product();

// function getModel(request, response, next) {
//     const model = request.params.model;
//     switch (model) {
//         case 'categories':
//             request.model = categories;
//             next();
//             break;
//         case 'products': 
//             request.model=products;
//             next();
//             break;
//         default:
//             throw new Error('invalid model')
//     }
   
// }

// Routes 
app.param('model', getModel);
app.get('/:model', handleGetAll);
app.get('/:model/:id', handleGetOne);
app.post('/:model', handlePost);
app.put('/:model/:id', handleUpdate);
app.delete('/:model/:id', handleDelete)

app.get('/this_will_error', (request, response) => {
    throw new Error('yo dawg I heard you like errors so I put some error in your errors so you can error while you error')
  })

//catch all
const notFoundErrorHandler = require('./middlewares/404')
app.use(notFoundErrorHandler)
const internalServerErrorHandler = require('./middlewares/500')
app.use(internalServerErrorHandler)


//server start up
let isRunning = false;

module.exports = {
    server: app, 
    start: function(port) {
        if (!isRunning) {
            app.listen(port, () => {
                isRunning = true
                console.log(`Server is listening on ${port}`)    
            })
        } else {
            console.error(`Server is already running on ${port}`)
        }
    }
}