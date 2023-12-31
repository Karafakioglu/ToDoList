import "./styles/main.css";
import * as StorageManager from "./storageManager.js";
import * as ProjectManager from "./projectManager.js";
import * as TaskManager from "./taskManager.js";
import * as ImageManager from "./imageManager.js";
import { projectLogo, deleteProjectLogo } from "./imageManager.js";
import * as UiManager from "./uiManager.js";
import * as EventListenerManager from "./eventListenerManager.js";

UiManager.initializeToggles();
ImageManager.initializeImages();

let projects = StorageManager.loadProjects();
let selectedProjectId = StorageManager.loadSelectedProjectId();

const projectsElem = document.querySelector("[data-projects]");
const newProjectAddButton = document.getElementById("project-add-button-popup");
const newProjectInput = document.querySelector("[data-new-project-input]");
const projectTitleElem = document.querySelector("[data-project-title]");
const tasks = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newTaskInput = document.querySelector("[data-new-task-input]");
const newTaskAddButton = document.getElementById("task-add-button-popup");

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

newProjectAddButton.addEventListener("click", (e) =>
  EventListenerManager.createNewProject(
    e,
    ProjectManager.createProject,
    projects,
    saveAndRender
  )
);

newTaskAddButton.addEventListener("click", (e) =>
  EventListenerManager.createNewTask(
    e,
    TaskManager.createTask,
    projects,
    selectedProjectId,
    saveAndRender
  )
);

function saveAndRender() {
  save();
  render();
}

function save() {
  StorageManager.saveProjects(projects);
  StorageManager.saveSelectedProjectId(selectedProjectId);
}

function render() {
  UiManager.clearElement(projectsElem);
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
  UiManager.clearElement(tasks);
  TaskManager.renderTasks(
    projects,
    selectedProjectId,
    tasks,
    taskTemplate,
    deleteProjectLogo,
    saveAndRender
  );
}

render();
