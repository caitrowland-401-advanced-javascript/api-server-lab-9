//3rd party resources 
const express = require('express');
const morgan = require('morgan');

//middleware
const app = express();
app.use(morgan());
app.use(express.json());

//Routes 
const categoryRouter = require('./api/categoryRouter')
app.use(categoryRouter);
const productsRouter = require('./api/productRouter')
app.use(productsRouter)

app.get('/this_will_error', (request, response) => {
    throw new Error('yo dawg I heard you like errors so I put some error in your errors so you can error while you error')
  })

//catch all
const notFoundErrorHandler = require('./middlewares/404')
app.use(notFoundErrorHandler)
const internalServerErrorHandler = require('./middlewares/500')
app.use(internalServerErrorHandler)

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