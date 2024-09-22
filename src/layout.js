import logoImage from "./Images/logo.png";
import avatarImage from "./Images/hal.jpg";

export default function createLayout(){
    createLogo();
    createHeader();
    createSidebar();
    createModal();
}

function createLogo(){
    const logo = document.createElement('div');
    logo.setAttribute('id', 'companyLogo');
    const logoImg = document.createElement('img');
    logoImg.src = logoImage;
    logo.appendChild(logoImg);
    document.body.append(logo);
}

function createHeader(){
    const header = document.createElement('header');
    header.setAttribute('id', 'header'); 
    header.innerHTML = `
        <div class = "profileWelcome">
            <p>Welcome back, Dave.</p>
        </div>
        <nav>
            <ul class="navList">
                <li>Home</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </nav>`
    const avatarImg = document.createElement('img');
    avatarImg.src = avatarImage;
    document.body.append(header);
    const welcome = document.querySelector('.profileWelcome');
    welcome.appendChild(avatarImg);
}

function createSidebar(){
    const sidebar = document.createElement('aside');
    sidebar.setAttribute('id', 'sidebar');
    sidebar.innerHTML = `
    <div class="sidebarTitle">
        <p>Todo Projects</p>
    </div>
    <div class="sidebarLinks">
        <ul class = "sidebarList"> 
            <li>Default Projects</li>
            <li>Unique Project Name</li>
            <li>Add Project</li>
            <li>Not implementing</li>
        </ul>
    </div>
    <button class="newEntry">Create New Entry</button>`
    document.body.append(sidebar);
}


function createModal(){
    const modal = document.createElement('div');
    modal.setAttribute('id', 'modalBox');
    modal.innerHTML=`
        <dialog>
        <form>
            <label for="formTitle">Title:</label>
            <input type="text" id="formTitle" name="formTitle" maxlength="20" required><br>
            <label for="formDate">Due Date:</label>
            <input type="date" id="formDate" name="formDate" required><br>
            <label for="formPriority">Priority:</label>
            <select id="formPriority" name="formPriority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select><br>
            <label for="formDescription">Description:</label>
            <textarea type="text" id="formDescription" name="formDescription" maxlength="200"></textarea>
        </form>
        <button id="closeButton">Close</button>
        <button id="submitButton">Submit</button>
    </dialog>`
    document.body.append(modal);
}