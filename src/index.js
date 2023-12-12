import helloWorld from "./main";
import "./styles/main.css";
import logo from "./assets/logo.svg";
import projectLogo from "./assets/project-logo.svg";
import addNewProjectLogo from "./assets/new-project-logo.svg";
import deleteProjectLogo from "./assets/delete-logo.svg";
import doneLogo from "./assets/done-logo.svg";

const logoImg = document.getElementById("logo");
logoImg.src = logo;

const projectLogoImgs = document.querySelectorAll(".project-logo");
projectLogoImgs.forEach((img) => {
  img.src = projectLogo;
});

const addNewProject = document.querySelectorAll(".new-project-logo");
addNewProject.forEach((img) => {
  img.src = addNewProjectLogo;
});

const deleteLogoElems = document.querySelectorAll(".delete-logo");
deleteLogoElems.forEach((elem) => {
  elem.src = deleteProjectLogo;
});

const doneLogoElems = document.querySelectorAll(".done-logo");
doneLogoElems.forEach((elem) => {
  elem.src = doneLogo;
});

const deleteTaskLogoElems = document.querySelectorAll(".delete-task-logo");
deleteTaskLogoElems.forEach((elem) => {
  elem.src = deleteProjectLogo;
});

const projectElems = document.querySelectorAll(".project-button");
projectElems.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    alert("You clicked on the project");
  });
});

deleteLogoElems.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    alert("you clicked on project delete button");
  });
});

const newProjectButtonElem = document.getElementById("new-project-div");
newProjectButtonElem.addEventListener("click", (e) => {
  alert("You clicked on  add new project button");
});

const taskDoneButtonElems = document.querySelectorAll(".task-done-button");
taskDoneButtonElems.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    alert("you clicked on done task btn");
  });
});

const deleteTaskButtonElems = document.querySelectorAll(".delete-task-logo");
deleteTaskButtonElems.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    alert("you clicked on task delete button");
  });
});

// helloWorld();

const projectsElem = document.querySelector("[data-projects]");

let projects = ["Project 1", "Project 2"];

function render() {
  clearElement(projectsElem);
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    const projectBtnLeft = document.createElement("button");
    const projectLogoImg = document.createElement("img");
    const projectSpan = document.createElement("span");
    const projectBtnRight = document.createElement("button");
    const deleteLogoImg = document.createElement("img");

    projectDiv.classList.add("project");
    projectBtnLeft.classList.add("project-button");
    projectBtnLeft.classList.add("left");
    projectLogoImg.classList.add("project-logo");
    projectSpan.classList.add("project-name");
    projectBtnRight.classList.add("delete-project");
    projectBtnRight.classList.add("right");
    deleteLogoImg.classList.add("delete-logo");

    projectSpan.innerText = project;

    projectsElem.appendChild(projectDiv);
    projectDiv.appendChild(projectBtnLeft);
    projectDiv.appendChild(projectBtnRight);
    projectBtnLeft.appendChild(projectLogoImg);
    projectBtnLeft.appendChild(projectSpan);
    projectBtnRight.appendChild(deleteLogoImg);

    projectLogoImg.src = projectLogo;
    deleteLogoImg.src = deleteProjectLogo;
  });
}

function clearElement(element) {
  while (element.firstChild) {
    console.log(element.firstChild);
    element.removeChild(element.firstChild);
  }
}

render();
