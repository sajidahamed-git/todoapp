import { tasksArray } from ".";
import { appendTodolist } from "./appendTodolist";


export function formHandling() {
    console.log("hello");
    event.preventDefault();
    const taskTitleInput = document.getElementById("taskTitle");
    const taskDescriptionInput = document.getElementById("taskDescription");
    const taskDueDateInput = document.getElementById("taskDueDate");

    const title = taskTitleInput.value;
    const description = taskDescriptionInput.value;
    const dueDate = taskDueDateInput.value;
    const taskObject = {
        title,
        description,
        dueDate,
        completed: false,
    };
    console.log(taskObject);
    tasksArray.push(taskObject);
    console.log(tasksArray);
    appendTodolist(taskObject);
}
