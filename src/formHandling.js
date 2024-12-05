import { appendTodolist } from "./appendTodolist";
export let tasksArray = [];//constains all taskobjects


export function formHandling() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value;

    const taskObject = createTaskObject(title, description, dueDate);

    tasksArray.push(taskObject);
    console.log(tasksArray);
    appendTodolist(taskObject);
}
let taskIdCounter = 0;
function createTaskObject(title, description, dueDate) {
    return {
        id: taskIdCounter++,
        title: title,
        description: description,
        dueDate: dueDate,
        completed: false,
    };
}

export function deleteButtonHandler(button, taskId) {
    console.log(taskId);
    tasksArray = tasksArray.filter((tasks) => tasks.id !== taskId);

    const noteDiv = button.closest(".notes");
    if (noteDiv) {
        noteDiv.remove();
    }
}
