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

test('validates input for creating new notes', () => {
    const validNote = {
        title:"Test Title",
        text:"Test text",
        id: "bleeplefreeb"
    };
    const invalidNote = {
        title: "This is Bad",
        id: "blooplegoop"
    };
    const invalidNote2 = {
        text: "This is also Bad",
        id: "horbyflorp"
    }

    const result = validateNote(validNote);
    const result2 = validateNote(invalidNote);
    const result3 = validateNote(invalidNote2);

    expect(result).toEqual(true);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
})