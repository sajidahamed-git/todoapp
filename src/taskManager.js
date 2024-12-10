import {  renderTask } from "./taskRenderer";

export let tasksArray = [];//constains all taskobjects
const tempTasksArray = tasksArray
window.tempTasksArray  = tempTasksArray

export function formHandling() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value;
    const selectedProjectId_string = document.querySelector('select[name="project"').value

    const selectedProjectId = parseInt(selectedProjectId_string)


    const taskObject = createTaskObject(title, description, dueDate,selectedProjectId);

    tasksArray.push(taskObject);
    // console.log(tasksArray);
    renderTask(taskObject);
}
let taskIdCounter = 0;
function createTaskObject(title, description, dueDate,projectId) {
    return {
        id: taskIdCounter++,
        title: title,
        description: description,
        dueDate: dueDate,
        projectId:projectId,
    
        completed: false,
    };
}

export function deleteButtonHandler(button, taskId) {
    tasksArray = tasksArray.filter((tasks) => tasks.id !== taskId);
    console.log(tasksArray);

    const noteDiv = button.closest(".notes");
    if (noteDiv) {
        noteDiv.remove();
    }
}
