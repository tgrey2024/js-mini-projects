//create references to elements: floatingTextarea, notesArea, addNoteBtn, clearNoteBtn, viewNoteBtn
const notesArea = document.getElementById('notesArea');
const floatingTextarea = document.getElementById('floatingTextarea');
const addNoteBtn = document.getElementById('addNoteBtn');
const clearNoteBtn = document.getElementById('clearNoteBtn');
const viewNoteBtn = document.querySelectorAll('viewNoteBtn');
const closeModalBtn = document.querySelector('#closeModal');
let noteCount = 1;

//add click event listener to addNoteBtn
addNoteBtn.addEventListener('click', addNote);

//add click event listener to clearNoteBtn
clearNoteBtn.addEventListener('click', clearNote);

// add click event listener to closeModalBtn
closeModalBtn.addEventListener('click', hideModal);

// create addNote function to add note item to new note card
function addNote() {
    if (floatingTextarea.value) {
        // get text from floatingTextarea
        const noteText = floatingTextarea.value;
        const shortNoteText = noteText.slice(0, 50);
        // create new note card
        const newNoteCard = document.createElement('div');
        newNoteCard.className = 'col-10 col-md-5 mx-auto noteCard m-2 py-1 text-start';
        newNoteCard.innerHTML = `<h3>Note ${noteCount}</h3>
                            <p class="d-none">${noteText}</p>
                            <p>${shortNoteText}...</p>
                            <button class="btn btn-success viewNoteBtn p-2" data-bs-toggle="popover">View Details</button>`;
        // add newNoteCard to notesArea
        notesArea.appendChild(newNoteCard);
        // clear text from floatingTextarea
        floatingTextarea.value = '';
        // focus on floatingTextarea
        floatingTextarea.focus();
        // increment noteCount
        noteCount++;
        // add event listener to view note details
        const viewNoteBtns = document.getElementsByClassName('viewNoteBtn');
        for (let v of viewNoteBtns){
            v.addEventListener('click', viewNote);
        }
        


    }
}

// function to view note details
function viewNote() {
    // get note text
    const noteText = this.parentNode.children[1].innerText;
    // set modal body text to noteText
    const noteModal = document.querySelector('#noteModal .modal-body');
    noteModal.innerHTML = `<p>${noteText}</p>`;
    // show modal
    showModal();
}

// function to clear notes
function clearNote() {
    //confirm if user wants to clear notes
    if(confirm('Are you sure you want to clear all the notes?')){
        // clear to-do list
        notesArea.innerHTML = '';
        //focus on floatingTextarea
        floatingTextarea.focus();
    }
}

// function to show modal
function showModal() {
    noteModal.style.display = 'block';
}

// function to hide modal
function hideModal() {
    noteModal.style.display = 'none';
}