import Todo from "./todo";

export function deleteButtonFunctionality(){
    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach(function(deleteButton){
        deleteButton.addEventListener('click', function(){
            const todoContainerId = deleteButton.closest('div').id;
            const todoContainer = document.getElementById(todoContainerId);
            todoContainer.remove();
        });
    });
}

export function newEntryFunctionality(){
    const newEntryButton = document.querySelector('.newEntry');
    const dialog = document.querySelector('dialog');
    const closeButton = document.querySelector('#closeButton');
    const submitButton = document.querySelector('#submitButton');

    newEntryButton.addEventListener('click', ()=>{
        dialog.showModal();
    });

    closeButton.addEventListener('click', ()=>{
        dialog.close();
    });

    submitButton.addEventListener('click', function(){
        createEntryFromForm();
        dialog.close();
    });

}

function createEntryFromForm(){
    const formTitle = document.querySelector('#formTitle').value;
    const formDate = document.querySelector('#formDate').value;
    const formPriority = document.querySelector('#formPriority').value;
    const formDescription = document.querySelector('#formDescription').value;

    let titleEntry = formTitle;
    let dateEntry = formDate;
    let priorityEntry = formPriority;
    let descriptionEntry = formDescription;

    
    const formEntry = new Todo(titleEntry, descriptionEntry,
        dateEntry, priorityEntry);
    formEntry.format();
}

function editButtonFunctionality(){

}
