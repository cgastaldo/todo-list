export default class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    format(){
        createTodoEntry2(this.title, this.description, this.dueDate,
                this.priority);
        //createTodoEntry();
        //fillToDoEntry(this.title, this.description, this.dueDate,
        //    this.priority);
    }
}

const mainDiv = document.querySelector("#content");



function createTodoEntry2(title, description, dueDate, priority){
    const card = document.createElement('div');
    card.classList.add('todoContainer');
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


function createTodoEntry(){
    const entryCreation = document.createElement('div');
    entryCreation.classList.add('todoContainer');
    entryCreation.innerHTML=`
        <p class = "todoTitle"></p>
        <p class = "todoPriority"></p>
        <p class = "todoDueDate"></p>
        <p class = "todoDescription"></p>`
    mainDiv.appendChild(entryCreation);
}

function fillToDoEntry(title, description, dueDate, priority){
    const titleEntry = document.querySelector('.todoTitle');
    titleEntry.textContent = title;
    const priorityEntry = document.querySelector('.todoPriority');
    priorityEntry.textContent = priority;
    const dateEntry = document.querySelector('.todoDueDate');
    dateEntry.textContent = dueDate;
    const descriptionEntry = document.querySelector('.todoDescription');
    descriptionEntry.textContent = description;
}


