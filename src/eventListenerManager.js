const newTaskAddButton = document.getElementById("task-add-button-popup");
const newTaskInput = document.querySelector("[data-new-task-input]");

const newProjectInput = document.querySelector("[data-new-project-input]");
const newProjectAddButton = document.getElementById("project-add-button-popup");

export function createNewProject(e, createItem, projects, saveAndRender) {
  e.preventDefault();
  let projectName = newProjectInput.value;
  if (projectName == null || projectName === "") return;

  const project = createItem(projectName);
  newProjectInput.value = null;
  projects.push(project);
  saveAndRender();
}

export function createNewTask(
  e,
  createItem,
  projects,
  selectedProjectId,
  saveAndRender
) {
  e.preventDefault();
  let taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;

  const task = createItem(taskName);
  newTaskInput.value = null;

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  selectedProject.tasks.push(task);
  saveAndRender();
}
