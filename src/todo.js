export default class Todo{
    constructor(title, description, dueDate, priority){
        this.id = Date.now().toString(36) + Math.random().toString(36);
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    format(){
        createTodoEntry(this.title, this.description, this.dueDate,
                this.priority, this.id);
    }
}

const mainDiv = document.querySelector("#content");

function createTodoEntry(title, description, dueDate, priority, id){
    const card = document.createElement('div');
    card.classList.add('todoContainer');
    card.setAttribute('id', id);
    mainDiv.appendChild(card);
    
    const titleEntry = document.createElement('p');
    titleEntry.setAttribute('class', 'todoTitle');
    titleEntry.textContent = title;
    card.appendChild(titleEntry);

    const priorityEntry = document.createElement('p');
    priorityEntry.setAttribute('class', 'todoPriority');
    priorityEntry.textContent = priority;
    card.appendChild(priorityEntry);

    const dateEntry = document.createElement('p');
    dateEntry.setAttribute('class', 'todoDueDate');
    dateEntry.textContent = dueDate;
    card.appendChild(dateEntry);

    const descriptionEntry = document.createElement('p');
    descriptionEntry.setAttribute('class', 'todoDescription');
    descriptionEntry.textContent = description;
    card.appendChild(descriptionEntry);

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'editBtn');
    editButton.textContent = "Edit";
    card.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteBtn');
    deleteButton.textContent = "Delete";
    card.appendChild(deleteButton);

}

