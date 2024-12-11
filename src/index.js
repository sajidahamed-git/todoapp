import "./styles.css";

import { projectEventListeners } from "./projectEventListeners";
import { demo } from "./taskListener";

//adds eventlisteners to the todolist
document.addEventListener('DOMContentLoaded',demo)
document.addEventListener('DOMContentLoaded',projectEventListeners)

