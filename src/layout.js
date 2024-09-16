export default function createLayout(){
    createLogo();
    createHeader();
    createSidebar();
}

function createLogo(){
    const logo = document.createElement('div');
    logo.id.add('companyLogo');
    logo.innerHTML = `
        <img src="./Images/logo.png">`
}

function createHeader(){
    const header = document.createElement('header');
    header.id.add('header'); //may have problems here
    header.innerHTML = `
        <div class = "profileWelcome">
            <p>Welcome back, Dave.</p>
            <img src="./Images/hal.jpg" class="profileImage">
        </div>
        <nav>
            <ul class="navList">
                <li>Home</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </nav>`
}

function createSidebar(){
    const sidebar = document.createElement('aside');
    sidebar.id.add('sidebar');
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
}















/*
    <div id="companyLogo">
        <img src="./Images/logo.png">
    </div>
    <header id = "header">
        <div class = "profileWelcome">
            <p>Welcome back, Dave.</p>
            <img src="./Images/hal.jpg" class="profileImage">
        </div>
        <nav>
            <ul class="navList">
                <li>Home</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </nav>
    </header>

        <aside id="sidebar">
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
        <button>Create New Project</button>
    </aside>
*/