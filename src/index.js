import "./styles.css";
import Todo from "./todo.js";
import createLayout from "./layout.js";
import { returnProject } from "./project.js";



createLayout();

returnProject();


/*

3. todo list should have 'projects' or separate lists of todos. 
    When user first opens app, should see 'default' project to which all of todos are put. Users should be able to create new projects and choose which project their todos go into
4. Separate application logic from DOM related content - Keep in 
    different modules. 
5. Should be able to 
    a. View all projects
    b. view all todos in each project (title, due date, color for priorities)
    c. expand a single to do to see/edit its details
    d. delete a todo
7. date-fns library from npm helps with formatting/manipulating dates and times.
*/