const newTaskFormDiv = document.getElementById("new-task-form");
const newTaskButton = document.getElementById("new-task-div");
const newProjectFormDiv = document.getElementById("new-project-form");
const newProjectButton = document.getElementById("new-project-div");
const newTaskInput = document.querySelector("[data-new-task-input]");
const newProjectInput = document.querySelector("[data-new-project-input]");
const newTaskCancelButton = document.getElementById("task-cancel-button-popup");
const newProjectCancelButton = document.getElementById(
  "project-cancel-button-popup"
);

export function initializeToggles() {
  newTaskButton.addEventListener("click", () =>
    toggleFormDisplay(newTaskButton, newTaskFormDiv)
  );
  newProjectButton.addEventListener("click", () =>
    toggleFormDisplay(newProjectButton, newProjectFormDiv)
  );
  newTaskCancelButton.addEventListener("click", (e) =>
    resetAndToggleForm(e, newTaskInput, newTaskFormDiv, newTaskButton)
  );
  newProjectCancelButton.addEventListener("click", (e) =>
    resetAndToggleForm(e, newProjectInput, newProjectFormDiv, newProjectButton)
  );
}

function toggleFormDisplay(button, form) {
  const formCurrentDisplay = window.getComputedStyle(form).display;
  form.style.display = formCurrentDisplay === "none" ? "flex" : "none";

  const buttonCurrentDisplay = window.getComputedStyle(button).display;
  button.style.display = buttonCurrentDisplay === "none" ? "flex" : "none";
}

function resetAndToggleForm(e, input, form, button) {
  e.preventDefault();
  input.value = null;
  toggleFormDisplay(button, form);
}
