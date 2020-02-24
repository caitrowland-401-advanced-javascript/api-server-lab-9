//.env
require('dotenv').config();

//Connect to mongo server
const mongoose = require('mongoose');
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const {MONGODB_URI, PORT} = process.env
mongoose.connect(MONGODB_URI, mongooseOptions, () => {
    console.log('connected to MongoDB')
})

//Start express server 
const server = require('./src/app');
server.start(PORT)