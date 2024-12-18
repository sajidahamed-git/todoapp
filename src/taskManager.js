import { renderTask } from "./taskRenderer";
import { tasksArray, updateTasksArray } from ".";
import { isArrayEmpty } from ".";

//  let tasksArray = intiTasksArray()
// export let tasksArray = []
export function formHandling() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value;
  const selectedProjectId_string = document.querySelector(
    'select[name="project"'
  ).value;

  const selectedProjectId = parseInt(selectedProjectId_string);

  const taskObject = createTaskObject(
    title,
    description,
    dueDate,
    selectedProjectId
  );

  tasksArray.push(taskObject);
  updateTasksArray(tasksArray);
  renderTask(taskObject);
}
let taskIdCounter;
function createTaskObject(title, description, dueDate, projectId) {
  if (isArrayEmpty(tasksArray)) {
    taskIdCounter = 0;
    console.log(taskIdCounter);
  } else {
    taskIdCounter = localStorage.getItem("taskIdCounter", taskIdCounter);
  }
  let task = {
    id: taskIdCounter++,
    title: title,
    description: description,
    dueDate: dueDate,
    projectId: projectId,

    completed: false,
  };
  localStorage.setItem("taskIdCounter", taskIdCounter);
  return task;
}

export function deleteButtonHandler(button, taskId) {
  const filteredArray = tasksArray.filter((tasks) => tasks.id !== taskId);
  updateTasksArray(filteredArray);
  const noteDiv = button.closest(".notes");
  if (noteDiv) {
    noteDiv.remove();
  }
}
