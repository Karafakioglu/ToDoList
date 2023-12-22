import logo from "./assets/logo.svg";
import projectLogo from "./assets/project-logo.svg";
import addNewProjectLogo from "./assets/new-project-logo.svg";
import deleteProjectLogo from "./assets/delete-logo.svg";
import doneLogo from "./assets/done-logo.svg";

export function initializeImages() {
  document.getElementById("logo").src = logo;
  setImagesToElements(".project-logo", projectLogo);
  setImagesToElements(".new-project-logo", addNewProjectLogo);
  setImagesToElements(".delete-logo", deleteProjectLogo);
  setImagesToElements(".done-logo", doneLogo);
  setImagesToElements(".delete-task-logo", deleteProjectLogo);
}

function setImagesToElements(selector, imagePath) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((elem) => {
    elem.src = imagePath;
  });
}

export { logo, projectLogo, addNewProjectLogo, deleteProjectLogo, doneLogo };
