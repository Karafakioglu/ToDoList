import helloWorld from "./main";
import './styles/main.css';
import logo from './assets/logo.svg';
import projectLogo from './assets/project-logo.svg';
import addNewProjectLogo from './assets/new-project-logo.svg';

const logoImg = document.getElementById('logo');
logoImg.src = logo;

const projectLogoImgs = document.querySelectorAll('.project-logo');
projectLogoImgs.forEach(img => {
    img.src = projectLogo;
})

const addNewProject = document.getElementById('new-project-logo');
addNewProject.src = addNewProjectLogo;


// helloWorld();
