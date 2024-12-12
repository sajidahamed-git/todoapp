import {  renderTask } from "./taskRenderer";
import { tasksArray ,updateTasksArray } from ".";


//  let tasksArray = intiTasksArray()
// export let tasksArray = []
export function formHandling() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value;
    const selectedProjectId_string = document.querySelector('select[name="project"').value

    const selectedProjectId = parseInt(selectedProjectId_string)


    const taskObject = createTaskObject(title, description, dueDate,selectedProjectId);

    tasksArray.push(taskObject);
    updateTasksArray(tasksArray)
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
    const filteredArray = tasksArray.filter((tasks) => tasks.id !== taskId);
    updateTasksArray(filteredArray)
    const noteDiv = button.closest(".notes");
    if (noteDiv) {
        noteDiv.remove();
    }
}
