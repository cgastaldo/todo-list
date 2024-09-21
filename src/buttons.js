

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

    newEntryButton.addEventListener('click', ()=>{
        dialog.showModal();
    });

    closeButton.addEventListener('click', ()=>{
        dialog.close();
    });

}

function editButtonFunctionality(){

}
