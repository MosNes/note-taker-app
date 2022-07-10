const fs = require('fs');
const {
    createNewNote, deleteNote, validateNote 
} = require('../lib/notes');
const notes = require('../db/db.json');

//required so that fs in createNewNote doesn't actually write to the db.json file
jest.mock('fs');

test('creates a new note object', () => {
    const note = createNewNote({title: "Foo", text: "Bar"}, notes);

    expect(note.title).toEqual("Foo");
    expect(note.text).toEqual("Bar");
});