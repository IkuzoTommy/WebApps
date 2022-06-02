const notes = document.getElementById("container");
const newNoteBttn = document.querySelector("addNoteBttn");

function getNotes(){
    return JSON.parse(localStorage.getItem("sticka" || []))
}

function saveNote(notes){
    localStorage.setItem("sticka", JSON.stringify(notes))

}
function updateNote (id, newContent){
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id == id)[0];

    targetNote.content = newContent;
    saveNotes(notes);


    
}

function createNoteEle(id, content){
    const element = document.createElement('textarea');

    element.classList.add('note');
    element.value = content;
    element.placeholder = "This one is EMPTY";

    element.addEventListener('change', () => {
        updateNote(id, element.value);
    });

    element.addEventListener('dblclick', ()=>{
        const doDelete = confirm('You really wanna delete that??')

        if(doDelete){
            deleteNote(id, element)
        }
    });

    return element;

}

function addNote(){
    const notes = getNotes();
    const noteObject={
        id: Math.floor(Math.random() * 10000),
        content: ''
    };

    const noteElement = createNoteEle(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement,addNoteButton);
}


