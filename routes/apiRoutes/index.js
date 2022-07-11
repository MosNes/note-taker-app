//this index.js collects all of the HTML-related routes into a single file for exporting to server.js

//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const path = require('path');
const { createNewNote, deleteNote, validateNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const router = require('express').Router();



//------------ROUTES-------------------------------------

//create route to DELETE note from db.json
router.delete('/notes/:id', (req, res) => {
    // const result = deleteNote(req.params.id, notes);
   console.log("attempting to delete " + req.params.id);
   const result = deleteNote(req.params.id, notes)
   if (result) {
    res.json(result);
   } else {
    res.status(400).send("ID not Found.");
   }
    
});

//creates Route to GET notes from db.json
router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

//create route to POST new note to db.json
router.post('/notes', (req, res) => {

    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.')
    } else {
        const note = createNewNote(req.body, notes);

        res.json(note);
    }
});

module.exports = router;