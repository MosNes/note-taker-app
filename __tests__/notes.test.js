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
    expect(note.id).toEqual(expect.any(String));
});

test('Deletes a note object', () => {
    let notesArray = [
        {
            title:"Test Title",
            text:"Test text",
            id: "bleeplefreeb"
        },
        {
            title:"Test Title 2",
            text: "Test Text",
            id: "blorpleflorb"
        }
    ];

    notesArray = deleteNote('bleeplefreeb', notesArray);
    const result2 = deleteNote('blibblefrib', notesArray);

    expect(notesArray.length).toEqual(1);
    expect(notesArray[0].id).toEqual("blorpleflorb");
    expect(result2.length).toEqual(1);
});