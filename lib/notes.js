//this file contains all functions that process the data from GET, POST, and DELETE requests

//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

//------------FUNCTIONS-------------------------------------

//creates a new Note object from user input
function createNewNote(body, notesArray) {
    let note = body;
    note.id = uuidv4();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

//deletes a note object from the db.json file with the given ID
function deleteNote(id, notesArray) {
    let filteredArray = notesArray;
    //creates a new array containing only notes that don't have the specified id
    filteredArray = filteredArray.filter(
        note => note.id !== id);
    if (filteredArray.length === notesArray.length) {
        console.log(`No note with id: ${id} found.`);
        return false;
    }
    
    return filteredArray;
}

//data validation for creating new note objects
function validateNote(note) {
    if (!note.title || typeof note.title != 'string'){
        return false;
    }
    if (!note.text || typeof note.text != 'string'){
        return false;
    }
    return true;
}

module.exports = { createNewNote, deleteNote, validateNote };