const notesContainer = document.getElementById("app");
//reference to the main container, that will be used later
const addNoteButton = notesContainer.querySelector(".add-note");
//this is just referenceing the add notes button

getNotes().forEach((note) => { //this will display the notes to the user
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton); //just inserts the note before the add note button
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
  //attempt to get all of the notes stored in local storage
  //for first time users it will just return an empty array
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
  //takes in javascript notes and then makes them a string that will be stored in your local
  //storage, basically updates the array and then saves it as the same array
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");
  //"element" is a  javascript version of an html element in this case

  element.classList.add("note"); //add the class "note" to the newly created element (textarea for html) so that the css can manipulate it
  element.value = content; //sets the value of the element to the content of the element from the html
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000), //gets a random number to assign as the ID
    content: "" // default content is just an empty string
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content); // createNoteElement from alittle above is now assigned the id and the default note 
  notesContainer.insertBefore(noteElement, addNoteButton); //inside the div place the noteElement before the addNoteButton

  notes.push(noteObject); //pushes new content to the notes array that was called in the beginning of the function
  saveNotes(notes); // adds it to the local storage
}

function updateNote(id, newContent) {
  const notes = getNotes(); //calls all the notes to the function so that it can be checked in the next step
  const targetNote = notes.filter((note) => note.id == id)[0]; // checks through all the notes to find the one that you are currently typing on 

  targetNote.content = newContent; // "the content of the note i am working on will be set to the var newcontent "
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
