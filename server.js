//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------

const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

//creates instance of an express server
//invoked by `npm start` in terminal
// use Ctrl+C to end the server
const app = express();

//router objects
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//-----REQUIRED MIDDLEWARE-------------------------------------------------------

//both of these are required to receive and interpret POST requests
//parse incoming string or array
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

//required to serve static assets like front-end js and CSS
//makes the whole 'public' folder available
//otherwise would need to create endpoints for each js and css file for each page
app.use(express.static('public'));

//required to parse the router objects from the /routes/ folder
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



//------FUNCTIONS----------------------------------------------------------------

//starts listening for requests on port 3001
//if called on a local PC, starts the server on http://localhost:PORT/
app.listen(PORT, () => {
    console.log(`API Server now listening on port ${PORT}!`);
});