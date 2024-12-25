import trashIcon from "../assets/trash.png";

import { checkboxHandler, tasksArray } from "./taskManager";
import {
  addDeleteButtonListener,
  addDetailsButtonListener,
} from "./taskListener";

const notesContainer = document.querySelector(".notesContainer");
export function renderTask(taskObject) {
  //todo element represents individual notes
  const todoElement = document.createElement("div");
  todoElement.classList.add(
    "task",
    "flex",
    "gap-2",
    "justify-start",
    "mb-4",
    "p-2",
    "text-sm",
    "bg-slate-200",
    "rounded-lg",
    "border-gray-200",
    "sm:text-xl",
    "sm:mt-4",
    "sm:p-4",
    "sm:border-2",
  );
  todoElement.setAttribute("id", `task-${taskObject.id}`);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("sm:w-6","sm:h-6","w-3", "h-3", "checkbox");

  const title = document.createElement("div");
  title.textContent = taskObject.title;
  title.classList.add("text-left","w-3/5");

  //if statement only works when rendering from local storage
  //see changes as soon as user clicks code in checkboxHandler

  const dueDate = document.createElement("div");
  dueDate.textContent = formatISODate(taskObject.dueDate);

  //leftside has the checkbox title and duedate
  const leftside = document.createElement("div");
  leftside.appendChild(checkbox);
  leftside.appendChild(title);
  leftside.appendChild(dueDate);
  leftside.classList.add(
    "flex",
    "gap-2",
    "justify-between",
    "items-center",
    "w-3/5",
  );

  todoElement.appendChild(leftside);   

  const details = document.createElement("button");
  details.textContent = "Details";
  details.classList.add(
    "details",
    "bg-blue-400",
    "p-2",
    "sm:px-4",
    "sm:py-2",
    "sm:bg-blue-500",
    "sm:text-white",
    "rounded-lg",
    "hover:bg-blue-600",
  );
  addDetailsButtonListener(details, taskObject.id);
  const delbtn = document.createElement("button");
  delbtn.classList.add("deletebtn");

  const icon = document.createElement("img");
  icon.src = trashIcon;
  icon.classList.add("sm:w-6")
  delbtn.appendChild(icon);

  //event listener is added to the delete button
  addDeleteButtonListener(delbtn, taskObject.id);

  //rightside has details and deletet button
  const rightside = document.createElement("div");
  rightside.appendChild(details);
  rightside.appendChild(delbtn);
  rightside.classList.add(
    "flex", 
    "w-1/5",
    "gap-2",
    "sm:gap-4", 
    "sm:w-2/5", 
    "justify-around");
  todoElement.appendChild(rightside);




  if (taskObject.completed === true) {
    todoElement.classList.add("line-through", "opacity-50");
    checkbox.checked = true;
    notesContainer.appendChild(todoElement);
  } else notesContainer.prepend(todoElement);
  checkbox.addEventListener("change", (event) => {
    checkboxHandler(taskObject.id, event.target.checked);
  });

  // console.log(todoElement);
}

export function renderTasksByProjectId(projectName, projectId) {
  // console.log(projectName);
  projectName = projectName.textContent;
  let filteredTasks = [];
  notesContainer.innerHTML = "";

  filteredTasks = tasksArray.filter((tasks) => tasks.projectId === projectId);

  if (filteredTasks.length === 0) {
    console.log("empty");
    notesContainer.innerHTML = 'No tasks in this project'
  } else {
    filteredTasks.forEach((task) => {
      renderTask(task);
    });
  }
}

export function renderAllTasks() {
  // console.log(array);
  notesContainer.innerHTML = "";
  // notesContainer.textContent = "All Tasks";
  tasksArray.forEach((task) => {
    renderTask(task);
  });
}

export function renderTodayTasks() {
  notesContainer.innerHTML = "";
  // notesContainer.textContent = "Tasks Due Today";
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  tasksArray.forEach((task) => {
    if (task.dueDate === formattedDate) {
      renderTask(task);
    }
  });
}

export function renderThisweekTasks() {
  notesContainer.innerHTML = ""; // Clear previous content
  console.log("hhkhk");
  // notesContainer.textContent = "Tasks Due This Week"; // Set the heading

  const currentDate = new Date(); // Get today's date
  const currentDay = currentDate.getDay(); // Get the current day of the week (0 = Sunday, 6 = Saturday)

  // Calculate the number of days until the upcoming Friday
  const daysUntilFriday = (5 - currentDay + 7) % 7; // 5 is Friday, % 7 ensures we wrap around to the next Friday if today is Friday

  // Set the date for this week's Friday
  const fridayDate = new Date(currentDate);
  fridayDate.setDate(currentDate.getDate() + daysUntilFriday);

  // Format the calculated Friday date in YYYY-MM-DD
  const formattedFridayDate = fridayDate.toISOString().split("T")[0];

  // Loop through tasksArray and check if each task is due before or on this week's Friday
  tasksArray.forEach((task) => {
    if (task.dueDate <= formattedFridayDate) {
      // Directly compare task.dueDate with formattedFridayDate
      renderTask(task); // Render the task
    }
  });
}

function formatISODate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    weekday: "short", // e.g., Sat
    month: "short", // e.g., Dec
    day: "numeric", // e.g., 28
  });
}
