import "./styles.css";

import { taskListeners } from "./taskListener";
import { setTasksArray } from "./taskManager";
import { renderAllTasks, renderTask } from "./taskRenderer";

import {
  projectEventListeners,
  setProjectsArray,
} from "./projectEventListeners";
import { projectRenderer } from "./projectRenderer";

import { createNoteInputCard } from "./createInputCard";
import { noteRenderer } from "./notesRenderer";
import { setNotesArray } from "./notesHandler";

document.addEventListener("DOMContentLoaded", () => {
  renderAllTasks();
});

document.addEventListener("DOMContentLoaded", () => {
  taskListeners();
  if (localStorage.getItem("tasksArray")) {
    const arr = JSON.parse(localStorage.getItem("tasksArray"));
    setTasksArray(arr);
    if (!isArrayEmpty(arr)) {
      //array is loaded from local andis not empty
      arr.forEach((element) => {
        renderTask(element);
      });
    } else console.log("tasksArray exists in local but empty");
  } else console.log("tasksArray does not exist in local");
});

document.addEventListener("DOMContentLoaded", () => {
  projectEventListeners();
  if (localStorage.getItem("projectsArray")) {
    const tempProjectsArray = JSON.parse(localStorage.getItem("projectsArray"));
    setProjectsArray(tempProjectsArray);
    if (!isArrayEmpty(tempProjectsArray)) {
      //array is loaded from local andis not empty
      tempProjectsArray.forEach((element) => {
        projectRenderer(element);
      });
    } else console.log("projectsArray exists in local but empty");
  } else console.log("projectsArray does not exist in local");
});

const notesBtn = document.querySelector(".notes button");
notesBtn.addEventListener("click", () => {
  createNoteInputCard();
  if (localStorage.getItem("notesArray")) {
    const tempNotesArray = JSON.parse(localStorage.getItem("notesArray"));
    setNotesArray(tempNotesArray);
    // setNotesArray(tempNotesArray)
    if (!isArrayEmpty(tempNotesArray)) {
      tempNotesArray.forEach((element) => {
        noteRenderer(element);
      });
    } else console.log("notes arr exists in local but is empty");
  } else console.log("notesarray does not exist in local");
});

export function isArrayEmpty(arr) {
  return arr.length === 0;
}
