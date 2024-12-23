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
