//create references to elements: txtBox, addBtn, clrBtn, delBtn, doneBtn
const addToDoBtn = document.getElementById('addToDoBtn');
const listTextInput = document.getElementById('listTextInput');
const toDoList = document.getElementById('toDoList');
const clearBtn = document.getElementById('clearBtn');

//add click event listener to addToDoBtn
addToDoBtn.addEventListener('click', addToDo);

//add click event listener to clearBtn
clearBtn.addEventListener('click', clear);

// create addToDo function to add to-do item to to-do list
function addToDo(e) {
    if (listTextInput.value) {
        e.preventDefault(); // prevent default form submission
        // get text from listTextInput
        const toDoText = listTextInput.value;
        // create new li element
        const newToDoElement = document.createElement('li');
        // add event listener to delete to-do item
        newToDoElement.addEventListener('click', removeFromList);
        
        // add text to newToDoElement
        newToDoElement.innerHTML = toDoText + ' <button onClick="removeFromList">X</button>';
        // add newToDoElement to toDoList
        toDoList.appendChild(newToDoElement);
        // clear text from listTextInput
        listTextInput.value = '';
        // focus on listTextInput
        listTextInput.focus();
    }
    
    
}

// function to remove to-do item from list
function removeFromList(e) {
    //confirm if user wants to remove item
    if(confirm('Are you sure you want to remove this item?')){
    // remove to-do item from list
    const listItem = e.target.parentNode;
    listItem.parentNode.removeChild(listItem);
    //focus on listTextInput
    listTextInput.focus();
}
}

// function to clear to-do list
function clear() {
    //confirm if user wants to clear list
    if(confirm('Are you sure you want to clear the list?')){
    // clear to-do list
    toDoList.innerHTML = '';
    //focus on listTextInput
    listTextInput.focus();
}
}