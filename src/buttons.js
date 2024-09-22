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

export function editButtonFunctionality(){
    const editButtons = document.querySelectorAll('.editBtn');
    editButtons.forEach(function(editButton){
        editButton.addEventListener('click', function(){
            const todoContainerId = editButton.closest('div').id;
            const todoContainer = document.getElementById(todoContainerId);
            const entryList = document.getElementById(todoContainerId).children;
            
            let currentTitle = entryList[0].innerHTML;
            let currentPriority = entryList[1].innerHTML;
            let currentDueDate = entryList[2].innerHTML;
            let currentDescription = entryList[3].innerHTML;

            console.log(currentPriority);

            document.getElementById('formTitle').value = currentTitle;
            document.getElementById('formPriority').setAttribute('value', currentPriority);
            document.getElementById('formDate').value = currentDueDate;
            document.getElementById('formDescription').value = currentDescription;

            const dialog = document.querySelector('dialog');
            const closeButton = document.querySelector('#closeButton');
            const submitButton = document.querySelector('#submitButton');
        
            dialog.showModal();

            let titleEntry = formTitle;
            let dateEntry = formDate;
            let priorityEntry = formPriority;
            let descriptionEntry = formDescription;
        
            const formEntry = new Todo(titleEntry, descriptionEntry,
                dateEntry, priorityEntry);
        
            closeButton.addEventListener('click', ()=>{
                dialog.close();
            });
        
            submitButton.addEventListener('click', function(){
                createEntryFromForm();
                todoContainer.remove();
                dialog.close();
            });



        });
    });
}
