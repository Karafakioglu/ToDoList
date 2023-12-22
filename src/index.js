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

//Project rendering

const projectsElem = document.querySelector("[data-projects]");
const newProjectAddButton = document.getElementById("project-add-button-popup");
const newProjectCancelButton = document.getElementById(
  "project-cancel-button-popup"
);
const newProjectFormDiv = document.getElementById("new-project-form");
const newProjectButton = document.getElementById("new-project-div");
const newProjectInput = document.querySelector("[data-new-project-input]");
const projectTitleElem = document.querySelector("[data-project-title]");
const tasks = document.querySelector("[data-tasks]");
const LOCAL_STORAGE_PROJECT_KEY = "projects.project";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "projects.selectedProjectId";
const taskTemplate = document.getElementById("task-template");
let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

const newTaskButton = document.getElementById("new-task-div");
const newTaskFormDiv = document.getElementById("new-task-form");
const newTaskCancelButton = document.getElementById("task-cancel-button-popup");
const newTaskInput = document.querySelector("[data-new-task-input]");
const newTaskAddButton = document.getElementById("task-add-button-popup");

newTaskButton.addEventListener("click", (e) => {
  const newTaskFormCurrentDisplay =
    window.getComputedStyle(newTaskFormDiv).display;
  newTaskFormDiv.style.display =
    newTaskFormCurrentDisplay === "none" ? "flex" : "none";

  const newTaskButtonCurrentDisplay =
    window.getComputedStyle(newTaskButton).display;
  newTaskButton.style.display =
    newTaskButtonCurrentDisplay === "none" ? "flex" : "none";
});

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

newTaskCancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  newTaskInput.value = null;
  const newTaskFormCurrentDisplay =
    window.getComputedStyle(newTaskFormDiv).display;
  newTaskFormDiv.style.display =
    newTaskFormCurrentDisplay === "none" ? "flex" : "none";

  const newTaskButtonCurrentDisplay =
    window.getComputedStyle(newTaskButton).display;
  newTaskButton.style.display =
    newTaskButtonCurrentDisplay === "none" ? "flex" : "none";
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
  console.log(e.target);
  if (e.target.closest(".project")) {
    selectedProjectId = e.target.closest(".project").dataset.projectId;
    saveAndRender();
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    const selectedTask = selectedProject.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
  }
});

projectsElem.addEventListener("click", (e) => {
  if (e.target.closest(".delete-project")) {
    console.log(e.target.closest(".project").dataset.projectId);
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

newTaskAddButton.addEventListener("click", (e) => {
  e.preventDefault();
  let taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;

  const task = createTask(taskName);
  newTaskInput.value = null;

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  selectedProject.tasks.push(task);
  saveAndRender();
});

function createTask(name) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
  };
}

function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
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
  clearElement(tasks);
  renderTasks();
}

function renderTasks() {
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  if (selectedProject) {
    selectedProject.tasks.forEach((task) => {
      const taskElem = document.importNode(taskTemplate.content, true);
      const checkbox = taskElem.querySelector("input");
      const deleteTaskLogo = taskElem.querySelector(".delete-task-logo");
      const deleteTaskBtn = taskElem.querySelector(".delete-task");
      deleteTaskLogo.src = deleteProjectLogo;

      deleteTaskBtn.addEventListener("click", (e) => {
        const selectedProject = projects.find(
          (project) => project.id === selectedProjectId
        );
        let selectedTaskId = e.target
          .closest(".task")
          .querySelector("input").id;
        console.log(selectedTaskId);

        selectedProject.tasks = selectedProject.tasks.filter(
          (task) => task.id !== selectedTaskId
        );
        saveAndRender();
      });

      checkbox.id = task.id;
      checkbox.checked = task.complete;
      const label = taskElem.querySelector("label");
      label.htmlFor = task.id;
      label.append(task.name);
      tasks.appendChild(taskElem);
    });
  }
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
  const project = projects.find((project) => project.id === selectedProjectId);

  if (project) {
    projectTitleElem.innerText = project.name;
  } else {
    projectTitleElem.innerText = "";
  }
}

//clearing all projects

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
