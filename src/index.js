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

//Project rendering

const projectsElem = document.querySelector("[data-projects]");
const newProjectAddButton = document.getElementById("project-add-button-popup");
const newProjectCancelButton = document.getElementById(
  "project-cancel-button-popup"
);
const newProjectFormDiv = document.getElementById("new-project-form");
const newProjectButton = document.getElementById("new-project-div");
const newProjectInput = document.querySelector("[data-new-project-input]");
const LOCAL_STORAGE_PROJECT_KEY = "projects.project";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "projects.selectedProjectId";
let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

newProjectButton.addEventListener("click", (e) => {
  const newProjectFormCurrentDisplay =
    window.getComputedStyle(newProjectFormDiv).display;
  newProjectFormDiv.style.display =
    newProjectFormCurrentDisplay === "none" ? "flex" : "none";

  const newProjectButtonCurrentDisplay =
    window.getComputedStyle(newProjectButton).display;
  newProjectButton.style.display =
    newProjectButtonCurrentDisplay === "none" ? "flex" : "none";
});

newProjectCancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  newProjectInput.value = null;
  const newProjectFormCurrentDisplay =
    window.getComputedStyle(newProjectFormDiv).display;
  newProjectFormDiv.style.display =
    newProjectFormCurrentDisplay === "none" ? "flex" : "none";

  const newProjectButtonCurrentDisplay =
    window.getComputedStyle(newProjectButton).display;
  newProjectButton.style.display =
    newProjectButtonCurrentDisplay === "none" ? "flex" : "none";
});

projectsElem.addEventListener("click", (e) => {
  if (e.target.closest(".project")) {
    selectedProjectId = e.target.closest(".project").dataset.projectId;
    saveAndRender();
  }
});

projectsElem.addEventListener("click", (e) => {
  if (e.target.closest(".delete-project")) {
    console.log(e.target.closest(".project").dataset.projectId);
    let projectId = e.target.closest(".project").dataset.projectId;
    projects = projects.filter((project) => project.id !== selectedProjectId);
    selectedProjectId = null;
    saveAndRender();
  }
});

newProjectAddButton.addEventListener("click", (e) => {
  e.preventDefault();
  let projectName = newProjectInput.value;
  if (projectName == null || projectName === "") {
    alert("Please enter a project name to add!");
    return;
  } else {
    const project = createProject(projectName);
    newProjectInput.value = null;
    projects.push(project);
    saveAndRender();
  }
});

function createProject(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
}

function render() {
  clearElement(projectsElem);
  renderProjects();
  renderProjectTitle();
}

function renderProjects() {
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    const projectBtnLeft = document.createElement("button");
    const projectLogoImg = document.createElement("img");
    const projectSpan = document.createElement("span");
    const projectBtnRight = document.createElement("button");
    const deleteLogoImg = document.createElement("img");

    projectDiv.classList.add("project");
    projectDiv.dataset.projectId = project.id;
    if (project.id === selectedProjectId) {
      projectDiv.classList.add("selected-project");
    }

    projectBtnLeft.classList.add("project-button");
    projectBtnLeft.classList.add("left");
    projectLogoImg.classList.add("project-logo");
    projectSpan.classList.add("project-name");
    projectBtnRight.classList.add("delete-project");
    projectBtnRight.classList.add("right");
    deleteLogoImg.classList.add("delete-logo");

    projectSpan.innerText = project.name;

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

function renderProjectTitle() {
  const projectTitleElem = document.querySelector("[data-project-title]");
  const project = projects.find((project) => project.id === selectedProjectId);

  if (project) {
    projectTitleElem.innerText = project.name;
  } else {
    projectTitleElem.innerText = ""; // or some default text
  }
}

//clearing all projects

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
