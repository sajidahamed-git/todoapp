import { highlightButton } from "../ui-interactions/highlightButton";
import { formHandling,deleteButtonHandler, detailsButtonHandler} from "./taskManager";
import { renderAllTasks,renderTodayTasks,renderThisweekTasks } from "./taskRenderer";

export function taskListeners() {
  const popup = document.getElementById("newTaskDialog");

  const addNewBtn = document.querySelector(".addNewBtn");
  addNewBtn.addEventListener("click", function () {
    popup.showModal();
  });

  const taskForm = document.getElementById("taskform");
  taskForm.addEventListener("submit", function () {
    formHandling();
    popup.close();
    taskForm.reset();
  });

  const cancel = document.getElementById("Cancel");
  cancel.addEventListener("click", () => {
    popup.close();
    taskForm.reset();
  });

  // buttons inside home tab
  //all tasks
  const allTasks = document.querySelector(".allTasks");
  allTasks.addEventListener("click", () => {
    renderAllTasks();
    addNewBtn.classList.remove("hidden");
    highlightButton('.allTasks')
  });
// today tasks
  const today = document.querySelector(".today");
  today.addEventListener("click", () => {
    renderTodayTasks();
    addNewBtn.classList.remove("hidden");
    highlightButton('.today')
  });
//this week tasks
  const thisweek = document.querySelector(".thisweek");
  thisweek.addEventListener("click", () => {
    renderThisweekTasks();
    addNewBtn.classList.remove("hidden");
    highlightButton('.thisweek')
  });
}

//event liteners for delete button loaded after user creates a note
export function addDeleteButtonListener(button, taskId) {
  button.addEventListener("click", () => {
    console.log("delete button clicked");
    deleteButtonHandler(button, taskId);
  });
}

//details button eventlistenr
export function addDetailsButtonListener(button,taskId){
  button.addEventListener('click',()=>{
    detailsButtonHandler(taskId)
  })
}