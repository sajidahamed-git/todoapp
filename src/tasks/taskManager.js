import { renderTask } from "./taskRenderer";
import { isArrayEmpty } from "..";

export let tasksArray = [];

export function setTasksArray(arr) {
  tasksArray = arr;
}

export function formHandling() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value;
  const selectedProjectId_string = document.querySelector(
    'select[name="project"]'
  ).value;

  const selectedProjectId = parseInt(selectedProjectId_string);

  const taskObject = createTaskObject(
    title,
    description,
    dueDate,
    selectedProjectId
  );

  tasksArray.push(taskObject);
  renderTask(taskObject);
  localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
}

let taskIdCounter;
function createTaskObject(title, description, dueDate, projectId) {
  if (isArrayEmpty(tasksArray)) {
    taskIdCounter = 0;
  } else {
    const lastElement = tasksArray[tasksArray.length - 1];
    taskIdCounter = lastElement.id + 1;
  }
  let task = {
    id: taskIdCounter,
    title: title,
    description: description,
    dueDate: dueDate,
    projectId: projectId,

    completed: false,
  };
  taskIdCounter++;
  return task;
}

export function deleteButtonHandler(button, taskId) {
  tasksArray = tasksArray.filter((tasks) => tasks.id !== taskId);

  localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
  const noteDiv = button.closest(".task");
  console.log(noteDiv);
  if (noteDiv) {
    noteDiv.remove();
  }
}
export function checkboxHandler(taskId, isChecked) {
  // console.log(a);
  // console.log(b.target.checked);
  const task = tasksArray.find((task) => task.id === taskId);
  const taskElement = document.getElementById(`task-${taskId}`)
  if (task) {
    task.completed = isChecked;
    console.log(`Task ${taskId} updated:`, task);

    //strikethough logic
    if (isChecked) {
      taskElement.classList.add('line-through',"opacity-50")
      //if checked move to the last of the list 
      const taskContainer = document.querySelector('.notesContainer')
      taskContainer.appendChild(taskElement)
    }else{
      taskElement.classList.remove('line-through','opacity-50')
    }


  }
  localStorage.setItem('tasksArray',JSON.stringify(tasksArray))
}
