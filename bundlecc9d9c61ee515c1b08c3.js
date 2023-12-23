/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/eventListenerManager.js":
/*!*************************************!*\
  !*** ./src/eventListenerManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   createNewTask: () => (/* binding */ createNewTask)
/* harmony export */ });
var newTaskAddButton = document.getElementById("task-add-button-popup");
var newTaskInput = document.querySelector("[data-new-task-input]");
var newProjectInput = document.querySelector("[data-new-project-input]");
var newProjectAddButton = document.getElementById("project-add-button-popup");
function createNewProject(e, createItem, projects, saveAndRender) {
  e.preventDefault();
  var projectName = newProjectInput.value;
  if (projectName == null || projectName === "") return;
  var project = createItem(projectName);
  newProjectInput.value = null;
  projects.push(project);
  saveAndRender();
}
function createNewTask(e, createItem, projects, selectedProjectId, saveAndRender) {
  e.preventDefault();
  var taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;
  var task = createItem(taskName);
  newTaskInput.value = null;
  var selectedProject = projects.find(function (project) {
    return project.id === selectedProjectId;
  });
  selectedProject.tasks.push(task);
  saveAndRender();
}

/***/ }),

/***/ "./src/imageManager.js":
/*!*****************************!*\
  !*** ./src/imageManager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewProjectLogo: () => (/* reexport default export from named module */ _assets_new_project_logo_svg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   deleteProjectLogo: () => (/* reexport default export from named module */ _assets_delete_logo_svg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   doneLogo: () => (/* reexport default export from named module */ _assets_done_logo_svg__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   initializeImages: () => (/* binding */ initializeImages),
/* harmony export */   logo: () => (/* reexport default export from named module */ _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   projectLogo: () => (/* reexport default export from named module */ _assets_project_logo_svg__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_project_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/project-logo.svg */ "./src/assets/project-logo.svg");
/* harmony import */ var _assets_new_project_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/new-project-logo.svg */ "./src/assets/new-project-logo.svg");
/* harmony import */ var _assets_delete_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/delete-logo.svg */ "./src/assets/delete-logo.svg");
/* harmony import */ var _assets_done_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/done-logo.svg */ "./src/assets/done-logo.svg");





function initializeImages() {
  document.getElementById("logo").src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
  setImagesToElements(".project-logo", _assets_project_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
  setImagesToElements(".new-project-logo", _assets_new_project_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
  setImagesToElements(".delete-logo", _assets_delete_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
  setImagesToElements(".done-logo", _assets_done_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
  setImagesToElements(".delete-task-logo", _assets_delete_logo_svg__WEBPACK_IMPORTED_MODULE_3__);
}
function setImagesToElements(selector, imagePath) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function (elem) {
    elem.src = imagePath;
  });
}


/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   renderProjectTitle: () => (/* binding */ renderProjectTitle),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: []
  };
}
function renderProjects(projects, selectedProjectId, projectsElem, projectLogo, deleteProjectLogo) {
  projects.forEach(function (project) {
    var projectDiv = document.createElement("div");
    var projectBtnLeft = document.createElement("button");
    var projectLogoImg = document.createElement("img");
    var projectSpan = document.createElement("span");
    var projectBtnRight = document.createElement("button");
    var deleteLogoImg = document.createElement("img");
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
function renderProjectTitle(projects, selectedProjectId, projectTitleElem) {
  var project = projects.find(function (project) {
    return project.id === selectedProjectId;
  });
  if (project) {
    projectTitleElem.innerText = project.name;
  } else {
    projectTitleElem.innerText = "";
  }
}

/***/ }),

/***/ "./src/storageManager.js":
/*!*******************************!*\
  !*** ./src/storageManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   loadSelectedProjectId: () => (/* binding */ loadSelectedProjectId),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects),
/* harmony export */   saveSelectedProjectId: () => (/* binding */ saveSelectedProjectId)
/* harmony export */ });
var LOCAL_STORAGE_PROJECT_KEY = "projects.project";
var LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "projects.selectedProjectId";
function saveProjects(projects) {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
}
function loadProjects() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
}
function saveSelectedProjectId(projectId) {
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, projectId);
}
function loadSelectedProjectId() {
  return localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);
}

/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
function createTask(name) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false
  };
}
function renderTasks(projects, selectedProjectId, tasks, taskTemplate, deleteProjectLogo, saveAndRender) {
  var selectedProject = projects.find(function (project) {
    return project.id === selectedProjectId;
  });
  if (selectedProject) {
    selectedProject.tasks.forEach(function (task) {
      var taskElem = document.importNode(taskTemplate.content, true);
      var checkbox = taskElem.querySelector("input");
      var deleteTaskLogo = taskElem.querySelector(".delete-task-logo");
      var deleteTaskBtn = taskElem.querySelector(".delete-task");
      deleteTaskLogo.src = deleteProjectLogo;
      deleteTaskBtn.addEventListener("click", function (e) {
        var selectedProject = projects.find(function (project) {
          return project.id === selectedProjectId;
        });
        var selectedTaskId = e.target.closest(".task").querySelector("input").id;
        console.log(selectedTaskId);
        selectedProject.tasks = selectedProject.tasks.filter(function (task) {
          return task.id !== selectedTaskId;
        });
        saveAndRender();
      });
      checkbox.id = task.id;
      checkbox.checked = task.complete;
      var label = taskElem.querySelector("label");
      label.htmlFor = task.id;
      label.append(task.name);
      tasks.appendChild(taskElem);
    });
  }
}

/***/ }),

/***/ "./src/uiManager.js":
/*!**************************!*\
  !*** ./src/uiManager.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearElement: () => (/* binding */ clearElement),
/* harmony export */   initializeToggles: () => (/* binding */ initializeToggles)
/* harmony export */ });
var newTaskFormDiv = document.getElementById("new-task-form");
var newTaskButton = document.getElementById("new-task-div");
var newProjectFormDiv = document.getElementById("new-project-form");
var newProjectButton = document.getElementById("new-project-div");
var newTaskInput = document.querySelector("[data-new-task-input]");
var newProjectInput = document.querySelector("[data-new-project-input]");
var newTaskCancelButton = document.getElementById("task-cancel-button-popup");
var newProjectCancelButton = document.getElementById("project-cancel-button-popup");
function initializeToggles() {
  newTaskButton.addEventListener("click", function () {
    return toggleFormDisplay(newTaskButton, newTaskFormDiv);
  });
  newProjectButton.addEventListener("click", function () {
    return toggleFormDisplay(newProjectButton, newProjectFormDiv);
  });
  newTaskCancelButton.addEventListener("click", function (e) {
    return resetAndToggleForm(e, newTaskInput, newTaskFormDiv, newTaskButton);
  });
  newProjectCancelButton.addEventListener("click", function (e) {
    return resetAndToggleForm(e, newProjectInput, newProjectFormDiv, newProjectButton);
  });
}
function toggleFormDisplay(button, form) {
  var formCurrentDisplay = window.getComputedStyle(form).display;
  form.style.display = formCurrentDisplay === "none" ? "flex" : "none";
  var buttonCurrentDisplay = window.getComputedStyle(button).display;
  button.style.display = buttonCurrentDisplay === "none" ? "flex" : "none";
}
function resetAndToggleForm(e, input, form, button) {
  e.preventDefault();
  input.value = null;
  toggleFormDisplay(button, form);
}
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Basic CSS Reset */

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  padding: 0;
  border: none;
  background: none;
}

/* Main Sections */

.wrapper {
  display: grid;
  grid-template-columns: 20fr 85fr;
  grid-template-rows: 10fr 85fr;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}

.header {
  background-color: #333;
  grid-column: 1/3;
  grid-row: 1/2;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: white;
}

.sidebar {
  background-color: #ddd;
  grid-column: 1/2;
  grid-row: 2/3;
}

.sidebar > div {
  width: 80%;
}

.main {
  grid-column: 2/4;
  grid-row: 2/3;
  background-color: #eee;
  width: 40rem;
  margin: 0 auto;
  padding: 2rem;
}

.main h1 {
  text-align: center;
}

#logo {
  height: 100px;
  width: 100px;
}

/*SideBar */

.projects-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
}

.project {
  display: flex;
}

.left {
  flex: 9;
}

.selected-project {
  background-color: rgb(109, 109, 109);
  border-radius: 0.5rem;
}

.projects div button {
  display: flex;
  font-size: 1.25rem;
  gap: 0.5rem;
  padding: 0.5rem;
}

.project:hover {
  background-color: rgb(109, 109, 109);
  border-radius: 0.5rem;
}

.new-project-button {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

#new-project-div:hover {
  background-color: rgb(109, 109, 109);
  border-radius: 0.5rem;
}

.projects .project:hover .delete-logo {
  display: block; /* or inline, inline-block, etc. */
}

.delete-logo,
.delete-task-logo {
  display: none;
}

#new-project-form {
  display: none;
  flex-direction: column;
  gap: 1rem;
}

#new-project-buttons-popup {
  display: flex;
  justify-content: space-around;
}

#input-add-project-popup {
  height: 2rem;
  border-radius: 10px;
}

#new-project-buttons-popup > button {
  border-radius: 5px;
  border: 1px solid black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
}

#project-add-button-popup {
  background-color: #90ef90;
  padding-right: 2rem;
  padding-left: 2rem;
}

#project-add-button-popup:hover {
  background-color: #8dce8d;
}

#project-cancel-button-popup {
  background-color: #fb8383;
  padding-right: 1rem;
  padding-left: 1rem;
}

#project-cancel-button-popup:hover {
  background-color: #d48888;
}

/* Task section */

.tasks-section {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1.5rem;
}

.task {
  display: flex;
  margin-bottom: 1rem;
}

.left {
  flex: 9;
}

.selected-task {
  background-color: rgb(109, 109, 109);
  border-radius: 0.5rem;
}

.tasks div button {
  display: flex;
  font-size: 1.25rem;
  gap: 0.5rem;
  padding: 0.5rem;
}

.task:hover {
  background-color: rgb(109, 109, 109);
  border-radius: 0.5rem;
}

.new-task-button {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

.tasks .task:hover .delete-task-logo {
  display: block; /* or inline, inline-block, etc. */
}

#new-task-form {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
}

#new-task-div:hover {
  background-color: rgb(109, 109, 109);
  border-radius: 0.5rem;
}

#new-task-buttons-popup {
  display: flex;
  justify-content: space-around;
}

#input-add-task-popup {
  width: 100%;
  height: 2rem;
  border-radius: 10px;
}

#new-task-buttons-popup {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

#new-task-buttons-popup > button {
  flex: 1; /* This will make each button take up 50% of the width */
  border-radius: 5px;
  border: 1px solid black;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  text-align: center; /* This will center the text within the buttons */
}

#new-task-buttons-popup > button {
  border-radius: 5px;
  border: 1px solid black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
}

#task-add-button-popup {
  background-color: #90ef90;
  padding-right: 2rem;
  padding-left: 2rem;
}

#task-add-button-popup:hover {
  background-color: #8dce8d;
}

#task-cancel-button-popup {
  background-color: #fb8383;
  padding-right: 1rem;
  padding-left: 1rem;
}

#task-cancel-button-popup:hover {
  background-color: #d48888;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/* Basic CSS Reset */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nbutton {\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n/* Main Sections */\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 20fr 85fr;\n  grid-template-rows: 10fr 85fr;\n  height: 100vh;\n  width: 100vw;\n  background-color: #eee;\n}\n\n.header {\n  background-color: #333;\n  grid-column: 1/3;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  color: white;\n}\n\n.sidebar {\n  background-color: #ddd;\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.sidebar > div {\n  width: 80%;\n}\n\n.main {\n  grid-column: 2/4;\n  grid-row: 2/3;\n  background-color: #eee;\n  width: 40rem;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.main h1 {\n  text-align: center;\n}\n\n#logo {\n  height: 100px;\n  width: 100px;\n}\n\n/*SideBar */\n\n.projects-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n  font-size: 1.5rem;\n}\n\n.project {\n  display: flex;\n}\n\n.left {\n  flex: 9;\n}\n\n.selected-project {\n  background-color: rgb(109, 109, 109);\n  border-radius: 0.5rem;\n}\n\n.projects div button {\n  display: flex;\n  font-size: 1.25rem;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n\n.project:hover {\n  background-color: rgb(109, 109, 109);\n  border-radius: 0.5rem;\n}\n\n.new-project-button {\n  display: flex;\n  align-items: center;\n  font-size: 1.25rem;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n#new-project-div:hover {\n  background-color: rgb(109, 109, 109);\n  border-radius: 0.5rem;\n}\n\n.projects .project:hover .delete-logo {\n  display: block; /* or inline, inline-block, etc. */\n}\n\n.delete-logo,\n.delete-task-logo {\n  display: none;\n}\n\n#new-project-form {\n  display: none;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#new-project-buttons-popup {\n  display: flex;\n  justify-content: space-around;\n}\n\n#input-add-project-popup {\n  height: 2rem;\n  border-radius: 10px;\n}\n\n#new-project-buttons-popup > button {\n  border-radius: 5px;\n  border: 1px solid black;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 1rem;\n}\n\n#project-add-button-popup {\n  background-color: #90ef90;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n#project-add-button-popup:hover {\n  background-color: #8dce8d;\n}\n\n#project-cancel-button-popup {\n  background-color: #fb8383;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n#project-cancel-button-popup:hover {\n  background-color: #d48888;\n}\n\n/* Task section */\n\n.tasks-section {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  font-size: 1.5rem;\n}\n\n.task {\n  display: flex;\n  margin-bottom: 1rem;\n}\n\n.left {\n  flex: 9;\n}\n\n.selected-task {\n  background-color: rgb(109, 109, 109);\n  border-radius: 0.5rem;\n}\n\n.tasks div button {\n  display: flex;\n  font-size: 1.25rem;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n\n.task:hover {\n  background-color: rgb(109, 109, 109);\n  border-radius: 0.5rem;\n}\n\n.new-task-button {\n  display: flex;\n  align-items: center;\n  font-size: 1.25rem;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.tasks .task:hover .delete-task-logo {\n  display: block; /* or inline, inline-block, etc. */\n}\n\n#new-task-form {\n  display: none;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#new-task-div:hover {\n  background-color: rgb(109, 109, 109);\n  border-radius: 0.5rem;\n}\n\n#new-task-buttons-popup {\n  display: flex;\n  justify-content: space-around;\n}\n\n#input-add-task-popup {\n  width: 100%;\n  height: 2rem;\n  border-radius: 10px;\n}\n\n#new-task-buttons-popup {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n#new-task-buttons-popup > button {\n  flex: 1; /* This will make each button take up 50% of the width */\n  border-radius: 5px;\n  border: 1px solid black;\n  padding: 0.25rem 1rem;\n  font-size: 1rem;\n  text-align: center; /* This will center the text within the buttons */\n}\n\n#new-task-buttons-popup > button {\n  border-radius: 5px;\n  border: 1px solid black;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 1rem;\n}\n\n#task-add-button-popup {\n  background-color: #90ef90;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n#task-add-button-popup:hover {\n  background-color: #8dce8d;\n}\n\n#task-cancel-button-popup {\n  background-color: #fb8383;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n#task-cancel-button-popup:hover {\n  background-color: #d48888;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/delete-logo.svg":
/*!************************************!*\
  !*** ./src/assets/delete-logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete-logo.svg";

/***/ }),

/***/ "./src/assets/done-logo.svg":
/*!**********************************!*\
  !*** ./src/assets/done-logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "done-logo.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/new-project-logo.svg":
/*!*****************************************!*\
  !*** ./src/assets/new-project-logo.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "new-project-logo.svg";

/***/ }),

/***/ "./src/assets/project-logo.svg":
/*!*************************************!*\
  !*** ./src/assets/project-logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "project-logo.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageManager.js */ "./src/storageManager.js");
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskManager.js */ "./src/taskManager.js");
/* harmony import */ var _imageManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imageManager.js */ "./src/imageManager.js");
/* harmony import */ var _uiManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiManager.js */ "./src/uiManager.js");
/* harmony import */ var _eventListenerManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventListenerManager.js */ "./src/eventListenerManager.js");








_uiManager_js__WEBPACK_IMPORTED_MODULE_5__.initializeToggles();
_imageManager_js__WEBPACK_IMPORTED_MODULE_4__.initializeImages();
var projects = _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.loadProjects();
var selectedProjectId = _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.loadSelectedProjectId();
var projectsElem = document.querySelector("[data-projects]");
var newProjectAddButton = document.getElementById("project-add-button-popup");
var newProjectInput = document.querySelector("[data-new-project-input]");
var projectTitleElem = document.querySelector("[data-project-title]");
var tasks = document.querySelector("[data-tasks]");
var taskTemplate = document.getElementById("task-template");
var newTaskInput = document.querySelector("[data-new-task-input]");
var newTaskAddButton = document.getElementById("task-add-button-popup");
projectsElem.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.closest(".project")) {
    selectedProjectId = e.target.closest(".project").dataset.projectId;
    saveAndRender();
  }
});
tasks.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "input") {
    var selectedProject = projects.find(function (project) {
      return project.id === selectedProjectId;
    });
    var selectedTask = selectedProject.tasks.find(function (task) {
      return task.id === e.target.id;
    });
    selectedTask.complete = e.target.checked;
    save();
  }
});
projectsElem.addEventListener("click", function (e) {
  if (e.target.closest(".delete-project")) {
    console.log(e.target.closest(".project").dataset.projectId);
    projects = projects.filter(function (project) {
      return project.id !== selectedProjectId;
    });
    selectedProjectId = null;
    saveAndRender();
  }
});
newProjectAddButton.addEventListener("click", function (e) {
  return _eventListenerManager_js__WEBPACK_IMPORTED_MODULE_6__.createNewProject(e, _projectManager_js__WEBPACK_IMPORTED_MODULE_2__.createProject, projects, saveAndRender);
});
newTaskAddButton.addEventListener("click", function (e) {
  return _eventListenerManager_js__WEBPACK_IMPORTED_MODULE_6__.createNewTask(e, _taskManager_js__WEBPACK_IMPORTED_MODULE_3__.createTask, projects, selectedProjectId, saveAndRender);
});
function saveAndRender() {
  save();
  render();
}
function save() {
  _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects(projects);
  _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.saveSelectedProjectId(selectedProjectId);
}
function render() {
  _uiManager_js__WEBPACK_IMPORTED_MODULE_5__.clearElement(projectsElem);
  _projectManager_js__WEBPACK_IMPORTED_MODULE_2__.renderProjects(projects, selectedProjectId, projectsElem, _imageManager_js__WEBPACK_IMPORTED_MODULE_4__.projectLogo, _imageManager_js__WEBPACK_IMPORTED_MODULE_4__.deleteProjectLogo);
  _projectManager_js__WEBPACK_IMPORTED_MODULE_2__.renderProjectTitle(projects, selectedProjectId, projectTitleElem);
  _uiManager_js__WEBPACK_IMPORTED_MODULE_5__.clearElement(tasks);
  _taskManager_js__WEBPACK_IMPORTED_MODULE_3__.renderTasks(projects, selectedProjectId, tasks, taskTemplate, _imageManager_js__WEBPACK_IMPORTED_MODULE_4__.deleteProjectLogo, saveAndRender);
}
render();
})();

/******/ })()
;
//# sourceMappingURL=bundlecc9d9c61ee515c1b08c3.js.map