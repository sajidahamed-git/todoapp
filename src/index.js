import "./styles.css";

import { taskListeners } from "./taskListener";
import { setTasksArray } from "./taskManager";
import { renderTask } from "./taskRenderer";

import { projectEventListeners } from "./projectEventListeners";
import { renderAllProjects } from "./projectRenderer";
import { notesEventListeners } from "./notesEventListeners";

document.addEventListener("DOMContentLoaded", () => {
  taskListeners();
  if (localStorage.getItem("tasksArray")) {
    const arr = JSON.parse(localStorage.getItem("tasksArray"));
    setTasksArray(arr);
    if (!isArrayEmpty(arr)) {
      arr.forEach((element) => {
        renderTask(element);
      });
    } else console.log("tasksArray exists in local but empty");
  } else console.log("tasksArray does not exist in local");
});


document.addEventListener("DOMContentLoaded", projectEventListeners);
document.addEventListener("DOMContentLoaded", notesEventListeners);

export function isArrayEmpty(arr) {
  return arr.length === 0;
}

export let projectsArray = [];
if (localStorage.getItem("projectsArray")) {
  projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
  renderAllProjects();
}
export function updateProjectsArray(newArray) {
  projectsArray = newArray;

  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}
