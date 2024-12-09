import "./styles.css";

import { taskEventListeners } from "./taskEventlisteners";
import { projectEventListeners } from "./projectEventListeners";

//adds eventlisteners to the todolist 
document.addEventListener("DOMContentLoaded",taskEventListeners);

document.addEventListener('DOMContentLoaded',projectEventListeners)

