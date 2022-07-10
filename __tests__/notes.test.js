const fs = require('fs');
const {
    createNewNote, deleteNote, validateNote 
} = require('../lib/notes');
const { notes } = require('../db/db.json');

//required so that fs in createNewNote doesn't actually write to the db.json file
jest.mock('fs');

