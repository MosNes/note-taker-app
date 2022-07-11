//this index.js collects all of the HTML-related routes into a single file for exporting to server.js

//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const fs = require('fs');
const path = require('path');
const { createNewNote, deleteNote, validateNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const router = require('express').Router();



//------------ROUTES-------------------------------------

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

//create route to DELETE note from db.json
router.delete('/notes/:id', (req, res) => {
   console.log("attempting to delete " + req.params.id);
   const result = deleteNote(req.params.id, notes)
   notes.splice(0, notes.length);
   result.forEach(element => notes.push(element));
   if (result) {
    //overwrites the existing db.json with the new notes array
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(result);
   } else {
    res.status(400).send("ID not Found.");
   }
    
});

module.exports = router;