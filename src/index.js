import "./styles.css";

import { projectEventListeners } from "./projectEventListeners";
import { taskListeners } from "./taskListener";
import { renderAllProjects } from "./projectRenderer";
import { renderAllTasks } from "./taskRenderer";

//adds eventlisteners to the todolist
document.addEventListener("DOMContentLoaded", taskListeners);
document.addEventListener("DOMContentLoaded", projectEventListeners);

export let tasksArray = [];
export function isArrayEmpty(arr) {
  return arr.length === 0;
}
if (localStorage.getItem("tasksArray")) {
  tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
  console.log(isArrayEmpty(tasksArray));
  renderAllTasks();
} else console.log("no tasks found");

//since tasksArray can only be modified in this module
//this function is used to modifiy the tasksArray from other modules
//this function is called anywhere we have to change the value of tasksArra
//with the argument of temporary array then the tasksArray is changed
//one example is in taskManager.js in deletebuttonHandler where deleted
//tasks are removed from the array the filtered or deleted items are removed
//and the filgered array is temporarily stored in a array and this function is
//called to update the value in tasksArray
export function updateTasksArray(newArray) {
  tasksArray = newArray;
  //and after any change to the tasksArray it is save to the localStorage
  localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
}

export let projectsArray = [];
if (localStorage.getItem("projectsArray")) {
  // console.log(true);
  projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
  renderAllProjects();
}
export function updateProjectsArray(newArray) {
  projectsArray = newArray;

  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}
