import "./styles.css";
import { onAuthStateChanged } from "firebase/auth";
import { taskListeners } from "./tasks/taskListener";
import { setTasksArray } from "./tasks/taskManager";
import { renderAllTasks, renderTask } from "./tasks/taskRenderer";

import {
  projectEventListeners,
  setProjectsArray,
} from "./projects/projectEventListeners";
import { projectRenderer } from "./projects/projectRenderer";

import { createNoteInputCard } from "./notes/createInputCard";
import { noteRenderer } from "./notes/notesRenderer";
import { setNotesArray } from "./notes/notesHandler";
import {
  highlightButton,
  menuVisibility,
} from "./ui-interactions/highlightButton";
const burgerButton = document.getElementById("burgerButton");
document.addEventListener("DOMContentLoaded", () => {
  highlightButton(".allTasks");
  renderAllTasks();
  burgerButton.addEventListener("click", () => {
    menuVisibility();
  });
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

const notesBtn = document.querySelector(".notes");
const addtasksbtn = document.querySelector(".addNewBtn");
notesBtn.addEventListener("click", () => {
  highlightButton(".notes");
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
  addtasksbtn.classList.add("hidden");
});

export function isArrayEmpty(arr) {
  return arr.length === 0;
}

import { signInWithGoogle, signOutUser } from "./myAuth";

const buttonText = document.querySelector(".buttonText");
const loginButton = document.getElementById("loginButton");
import { auth } from "./myAuth";
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is signedin", user);
    buttonText.textContent = "logout";
    loginButton.removeEventListener("click", signInWithGoogle);
    loginButton.addEventListener("click", signOutUser);
  } else {
    buttonText.textContent = "Sign in with Google";
    console.log("no user signed in");
    loginButton.removeEventListener("click", signOutUser);
    loginButton.addEventListener("click", signInWithGoogle);
  }
});
