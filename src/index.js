import "./styles.css";
import createLayout from "./layout.js";
import { returnProject } from "./project.js";
import { deleteButtonFunctionality } from "./buttons.js";
import { newEntryFunctionality } from "./buttons.js";
import { editButtonFunctionality } from "./buttons.js";

createLayout();
returnProject();
deleteButtonFunctionality();
newEntryFunctionality();
editButtonFunctionality();

/*
1. Button functionality only works for existing todoContainers and not new ones 
created through the edit button or through the new entry button. 
2. Current edit causes a creation of duplicate todoContainers.
3. Edit does not preset the priority dropdown.

Would like to spend more time on it but going to move on to next projects. Learned a lot,
but this is getting to be dull.
*/