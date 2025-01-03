import "./styles.css";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBwB1E_0bpw1vapGQXcYK_pXzCZDundJ18",
//   authDomain: "todo-app-0010.firebaseapp.com",
//   projectId: "todo-app-0010",
//   storageBucket: "todo-app-0010.firebasestorage.app",
//   messagingSenderId: "368894203420",
//   appId: "1:368894203420:web:684d7c97ba9acd94b031d9",
//   measurementId: "G-FPRJDMEWTD"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
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
import { highlightButton, menuVisibility } from "./ui-interactions/highlightButton";
const burgerButton = document.getElementById('burgerButton')
document.addEventListener("DOMContentLoaded", () => {
  highlightButton('.allTasks')
  renderAllTasks();
  burgerButton.addEventListener('click',()=>{
    menuVisibility()
  })
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
const addtasksbtn = document.querySelector('.addNewBtn')
notesBtn.addEventListener("click", () => {
  highlightButton('.notes')
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
  addtasksbtn.classList.add('hidden')
});

export function isArrayEmpty(arr) {
  return arr.length === 0;
}
