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
