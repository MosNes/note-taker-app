//this index.js collects all of the HTML-related routes into a single file for exporting to server.js

//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const path = require('path');
const notes = require('../../db/db.json');
const router = require('express').Router();



//------------ROUTES-------------------------------------

//creates Route to GET notes from db.json
router.get('/notes',(req,res)=>{
    let results = notes;

    res.json(results);
});

module.exports = router;