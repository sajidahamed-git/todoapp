import { formHandling } from "./taskManager";
import { deleteButtonHandler } from "./taskManager";
import { renderAllTasks } from "./taskRenderer";
import { renderTodayTasks } from "./taskRenderer";

export function demo(){
    console.log('demo functino');
    const popup = document.getElementById('newTaskDialog')

    const addNewBtn = document.querySelector('.addNewBtn')
    addNewBtn.addEventListener('click',function(){
        popup.showModal()
    })

    const taskForm = document.getElementById("taskform");
    taskForm.addEventListener("submit", function () {
      formHandling();
      popup.close();
    });

    const cancel = document.getElementById("Cancel");
    cancel.addEventListener("click", () => {
      popup.close();
    });

      // buttons inside home tab
  const allTasks = document.querySelector(".allTasks button");
  allTasks.addEventListener("click", renderAllTasks);

  const today = document.querySelector(".today button");
  today.addEventListener("click", renderTodayTasks);
  
}


//event liteners for delete button loaded after user creates a note
export function addDeleteButtonListener(button, taskId) {
    button.addEventListener("click", () => deleteButtonHandler(button, taskId));
  }
  