export default class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    format(){
        createTodoEntry();
        fillToDoEntry(this.title, this.description, this.dueDate,
            this.priority);
    }
}

const mainDiv = document.querySelector("#content");

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


