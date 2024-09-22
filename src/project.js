import Todo from "./todo.js";

export function returnProject(){
    let entry1Title = "Kids Birthday";
    let entry1Description = "Finally made enough from plasma donations to be able to get "
        + "that gift little Billy wanted.";
    let entry1DueDate = "2024-10-15";
    let entry1Priority = "Low";
    const entry1 = new Todo(entry1Title, entry1Description, 
        entry1DueDate, entry1Priority);
    entry1.format();

    let entry2Title = "Wedding Anniversary";
    let entry2Description = "Pick up the flowers, chocolates, and her favorite restaurant."
     + " Where was it again?";
    let entry2DueDate = "2024-11-01";
    let entry2Priority = "Low";
    const entry2 = new Todo(entry2Title, entry2Description, 
        entry2DueDate, entry2Priority);
    entry2.format();

    let entry3Title = "See if I can fly";
    let entry3Description = "I've been practicing flapping my arms. I'm getting very "
        + "quick at it. I should be able to build up enough speed before touching "
        + "the ground.";
    let entry3DueDate = "2024-12-01";
    let entry3Priority = "High";
    const entry3 = new Todo(entry3Title, entry3Description, 
        entry3DueDate, entry3Priority);
    entry3.format();

    let entry4Title = "Mid Oct Festival";
    let entry4Description = "Been looking forward to this one since like three days ago."
        + " Play it cool. The love of your life is going to be there. Don't show "
        + "fear. Just introduce yourself.";
    let entry4DueDate = "2024-10-15";
    let entry4Priority = "Medium"
    const entry4 = new Todo(entry4Title, entry4Description, 
        entry4DueDate, entry4Priority);
    entry4.format();

    let entry5Title = "Christmas";
    let entry5Description = "Should be easy. Just need to remember to wake up.";
    let entry5DueDate = "2024-12-25";
    let entry5Priority = "Low";
    const entry5 = new Todo(entry5Title, entry5Description, 
        entry5DueDate, entry5Priority);
    entry5.format();

    let entry6Title = "Favorite Restaurant";
    let entry6Description = "Which one is it?!";
    let entry6DueDate = "2024-10-30";
    let entry6Priority = "High";
    const entry6 = new Todo(entry6Title, entry6Description, 
        entry6DueDate, entry6Priority);
    entry6.format();
}


