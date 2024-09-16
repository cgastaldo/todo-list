import logoImage from "./Images/logo.png";
import avatarImage from "./Images/hal.jpg";

export default function createLayout(){
    createLogo();
    createHeader();
    createSidebar();
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
            <li>Unique Project Name 1</li>
            <li>Unique Project Name 2</li>
            <li>Unique Project Name 3</li>
        </ul>
    </div>
    <button>Create New Project</button>`
    document.body.append(sidebar);
}