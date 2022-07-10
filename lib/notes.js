//this file contains all functions that process the data from GET, POST, and DELETE requests

//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db.json');

//------------FUNCTIONS-------------------------------------

//creates a new Note object from user input
function createNewNote(body, notesArray) {

}

//deletes a note object from the db.json file with the given ID
function deleteNote(id, notesArray) {

}

//data validation for creating new note objects
function validateNote(note) {

}

module.exports = { createNewNote, deleteNote, validateNote };