const LOCAL_STORAGE_PROJECT_KEY = "projects.project";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "projects.selectedProjectId";

export function saveProjects(projects) {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
}

export function loadProjects() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
}

export function saveSelectedProjectId(projectId) {
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, projectId);
}

export function loadSelectedProjectId() {
    return localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);
}