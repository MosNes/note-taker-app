//this index.js collects all of the HTML-related routes into a single file for exporting to server.js

//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const path = require('path');
const router = require('express').Router();


//------------ROUTES-------------------------------------

//serves the index.html file when no route is presented by client
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//serves the notes.html file
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//serves the index.html file if the user specifies an endpoint that doesn't exist
//'wildcard' route must be placed after all other routes so that it doesn't conflict with the predefined routes
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router;