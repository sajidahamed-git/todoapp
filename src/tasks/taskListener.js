import { formHandling } from "./taskManager";
import { deleteButtonHandler } from "./taskManager";
import { renderAllTasks } from "./taskRenderer";
import { renderTodayTasks } from "./taskRenderer";
import { renderThisweekTasks } from "./taskRenderer";

export function taskListeners(){
    const popup = document.getElementById('newTaskDialog')

    const addNewBtn = document.querySelector('.addNewBtn')
    addNewBtn.addEventListener('click',function(){
        popup.showModal()
    })

    const taskForm = document.getElementById("taskform");
    taskForm.addEventListener("submit", function () {
      formHandling();
      popup.close();
      taskForm.reset()
    });

    const cancel = document.getElementById("Cancel");
    cancel.addEventListener("click", () => {
      popup.close();
      taskForm.reset()
    });

      // buttons inside home tab
  const allTasks = document.querySelector(".allTasks button");
  allTasks.addEventListener("click",()=>{
    renderAllTasks()
    addNewBtn.classList.remove('hidden')
  });

  const today = document.querySelector(".today button");
  today.addEventListener("click",()=>{
    renderTodayTasks()
    addNewBtn.classList.remove('hidden')

  });
  
  const thisweek = document.querySelector('.thisweek button')
  thisweek.addEventListener('click',()=>{
    renderThisweekTasks()
    addNewBtn.classList.remove('hidden')

  })
  
}


//event liteners for delete button loaded after user creates a note
export function addDeleteButtonListener(button, taskId) {
    button.addEventListener("click", () => deleteButtonHandler(button, taskId));
  }
  