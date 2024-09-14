

export default class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    format(){
        console.log(this.title, this.description, this.dueDate,
            this.priority);
    }
}

const mainDiv = document.querySelector("#content");

function createTodoEntry(){
    const entryCreation = document.createElement('div');
    entryCreation.classList.add('todoContainer');
    entryCreation.innerHTML=`
        <p class = "todoTitle">Title</p>
        <p class = "todoPriority">Priority</p>
        <p class = "todoDueDate">September 14, 2024</p>
        <p class = "todoDescription">aoisdjfoiajsdfoija
            oaidsjfoiasdjfoiasdjfoiasjdfi</p>`

    mainDiv.appendChild(entryCreation);

}

createTodoEntry();
