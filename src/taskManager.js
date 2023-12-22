export function createTask(name) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
  };
}

export function renderTasks(
  projects,
  selectedProjectId,
  tasks,
  taskTemplate,
  deleteProjectLogo,
  saveAndRender
) {
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
