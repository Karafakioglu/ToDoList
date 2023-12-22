import "./styles/main.css";

import * as StorageManager from "./storageManager.js";
import * as ProjectManager from "./projectManager.js";
import * as TaskManager from "./taskManager.js";
import * as ImageManager from "./imageManager.js";
import { projectLogo, deleteProjectLogo } from "./imageManager.js";

ImageManager.initializeImages();

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

const taskTemplate = document.getElementById("task-template");
let projects = StorageManager.loadProjects();
let selectedProjectId = StorageManager.loadSelectedProjectId();

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
    const project = ProjectManager.createProject(projectName);
    newProjectInput.value = null;
    projects.push(project);
    saveAndRender();
  }
});

newTaskAddButton.addEventListener("click", (e) => {
  e.preventDefault();
  let taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;

  const task = TaskManager.createTask(taskName);
  newTaskInput.value = null;

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  selectedProject.tasks.push(task);
  saveAndRender();
});

function saveAndRender() {
  save();
  render();
}

function save() {
  StorageManager.saveProjects(projects);
  StorageManager.saveSelectedProjectId(selectedProjectId);
}

function render() {
  clearElement(projectsElem);
  ProjectManager.renderProjects(
    projects,
    selectedProjectId,
    projectsElem,
    projectLogo,
    deleteProjectLogo
  );
  ProjectManager.renderProjectTitle(
    projects,
    selectedProjectId,
    projectTitleElem
  );
  clearElement(tasks);
  TaskManager.renderTasks(
    projects,
    selectedProjectId,
    tasks,
    taskTemplate,
    deleteProjectLogo,
    saveAndRender
  );
}

//clearing all projects

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
