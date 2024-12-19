import trashIcon from "./assets/trash.svg";

import { tasksArray } from "./taskManager";

import { addDeleteButtonListener } from "./taskListener";

const notesContainer = document.querySelector(".notesContainer");
export function renderTask(taskObject) {
  //todo element represents individual notes
  const todoElement = document.createElement("div");
  todoElement.classList.add(
    "notes",
    "mt-4",
    "flex",
    "justify-between",
    "border-2",
    "bg-slate-200",
    "p-4",
    "rounded-lg",
    "shadow-lg",
    "border-gray-200"
  );

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("w-6", "h-6");

  const title = document.createElement("div");
  title.textContent = taskObject.title;

  const dueDate = document.createElement("div");
  dueDate.textContent = taskObject.dueDate;

  //leftside has the checkbox title and duedate
  const leftside = document.createElement("div");
  leftside.appendChild(checkbox);
  leftside.appendChild(title);
  leftside.appendChild(dueDate);
  leftside.classList.add(
    "flex",
    "gap-4",
    "items-center",
    "w-3/5",
    "justify-between"
  );

  todoElement.appendChild(leftside);

  const details = document.createElement("button");
  details.textContent = "Details";
  details.classList.add(
    "details",
    "px-4",
    "py-2",
    "bg-blue-500",
    "text-white",
    "rounded-lg",
    "hover:bg-blue-600"
  );

  const delbtn = document.createElement("button");
  delbtn.classList.add("deletebtn");

  const icon = document.createElement("img");
  icon.src = trashIcon;
  delbtn.appendChild(icon);

  //event listener is added to the delete button
  addDeleteButtonListener(delbtn, taskObject.id);

  //rightside has details and deletet button
  const rightside = document.createElement("div");
  rightside.appendChild(details);
  rightside.appendChild(delbtn);
  rightside.classList.add("flex", "gap-4", "w-2/5", "justify-around");
  todoElement.appendChild(rightside);

  notesContainer.appendChild(todoElement);

  // console.log(todoElement);
}

export function renderTasksByProjectId(projectName, projectId) {
  // console.log(projectName);
  projectName = projectName.textContent;
  let filteredTasks = [];
  notesContainer.innerHTML = "";
  notesContainer.textContent = `Tasks from ${projectName} project`;

  filteredTasks = tasksArray.filter((tasks) => tasks.projectId === projectId);

  // console.log(filteredTasks);
  filteredTasks.forEach((task) => {
    renderTask(task);
  });
}

export function renderAllTasks() {
  // console.log(array);
  notesContainer.innerHTML = "";
  notesContainer.textContent = "All Tasks";
  tasksArray.forEach((task) => {
    renderTask(task);
  });
}

export function renderTodayTasks() {
  notesContainer.innerHTML = "";
  notesContainer.textContent = "Tasks Due Today";
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  tasksArray.forEach((task) => {
    if (task.dueDate === formattedDate) {
      renderTask(task);
    }
  });
}
// export function renderThisweekTasks(){
//   notesContainer.innerHTML = ''
//   notesContainer.textContent = 'Tasks Due This week'
//   //tasks Due by this friday
//   const currentDate = new Date();
//   const currentDay = currentDate.getDay();
//   const daysUntilFriday = 5 - currentDay;
//   const endOfWeek = new Date(currentDate);
//   endOfWeek.setDate(currentDate.getDate() + daysUntilFriday);
//   console.log(endOfWeek);

//   // Filter tasks that are due by this Friday
// ;

//   // Render the tasks
// console.log(tasksDueThisWeek);

// }
export function renderThisweekTasks() {
  notesContainer.innerHTML = ""; // Clear previous content
  notesContainer.textContent = "Tasks Due This Week"; // Set the heading

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
