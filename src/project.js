import Todo from "./todo.js";

function returnProject(){
    entry1Title = "Kids Birthday";
    entry1Description = "Finally made enough from plasma donations to be able to get "
        + "that gift little Billy wanted.";
    entry1DueDate = "10/1/24";
    entry1Priority = "4";

    entry2Title = "Wedding Anniversary";
    entry2Description = "Pick up the flowers, chocolates, and her favorite restaurant."
     + " Where was it again?";
    entry2DueDate = "11/1/24";
    entry2Priority = "3";

    entry3Title = "See if I can fly";
    entry3Description = "I've been practicing flapping my arms. I'm getting very "
        + "quick at it. I should be able to build up enough speed before touching "
        + "the ground.";
    entry3DueDate = "12/1/24";
    entry3Priority = "5";

    entry4Title = "Mid Oct Festival";
    entry4Description = "Been looking forward to this one since like three days ago."
        + " Play it cool. The love of your life is going to be there. Don't show "
        + "fear. Just introduce yourself.";
    entry4DueDate = "10/15/24";
    entry4Priority = "3";

    entry5Title = "Christmas";
    entry5Description = "Should be easy. Just need to remember to wake up.";
    entry5DueDate = "12/25/24";
    entry5Priority = "1";

    entry6Title = "Favorite Restaurant";
    entry6Description = "Which one is it?!";
    entry6DueDate = "10/30/24";
    entry6Priority = "5";
    for (let i=0; i<6; i++){
        entry = "entry" + String(i);
        title = "entry" + String(i) + "Title";
        description = "entry" + String(i) + "Description";
        dueDate = "entry" + String(i) + "DueDate";
        priority = "entry" + String(i) + "Priority";
    
        const entry = new Todo(title, description, dueDate, priority);
        entry.format();


    }
}


