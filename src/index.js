import "./styles.css";
import { eventlisteners } from "./eventlisteners";
import { appendTodolist } from "./appendTodolist";
import { projectEventListeners } from "./projectEventListeners";

//adds eventlisteners to the todolist 
document.addEventListener("DOMContentLoaded", eventlisteners);

document.addEventListener('DOMContentLoaded',projectEventListeners)

