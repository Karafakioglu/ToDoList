export function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

export function renderProjects(
  projects,
  selectedProjectId,
  projectsElem,
  projectLogo,
  deleteProjectLogo
) {
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

export function renderProjectTitle(
  projects,
  selectedProjectId,
  projectTitleElem
) {
  const project = projects.find((project) => project.id === selectedProjectId);

  if (project) {
    projectTitleElem.innerText = project.name;
  } else {
    projectTitleElem.innerText = "";
  }
}
