import trashIcon from "../assets/trash.svg";
import {
  projectDelbtnListener,
  projectNameListener,
} from "./projectEventListeners";
export function projectRenderer(projectObject) {
  //project element is the individual element which contains each project
  const projectelement = document.createElement("div");
  projectelement.classList.add(
    "projectElement",
    "flex",
    "w-full",
    // "border-2",
    "justify-between"
  );
  
  projectelement.setAttribute("data-id", projectObject.id);
  //projectName is actually a button
  // const projectName = document.createElement("button");
  // projectName.classList.add("projectName","w-full");
  const projectName = document.createElement("button");
projectName.classList.add(
  "projectName", 
  "w-11/12", 
  "py-2",                   // Padding (vertical)
  "px-4",                   // Padding (horizontal)
  "rounded-lg",             // Rounded corners
  "hover:bg-blue-300",      // Darker background on hover
  "focus:outline-none",     // Remove outline on focus
  "focus:ring-2",           // Focus ring for accessibility
  "focus:bg-blue-600"     // Color of focus ring
);

  projectName.textContent = projectObject.title;

  
  const delbtn = document.createElement("button");
  const icon = document.createElement("img");
  icon.src = trashIcon;
  delbtn.appendChild(icon);

  
  projectelement.appendChild(projectName);
  projectelement.appendChild(delbtn);

  const projectContainer = document.getElementById("projectContainer");

  //below code because the input of project is also in projectContainer so 
  //every new project is added in second place in the projectContainer
  projectContainer.insertBefore(projectelement, projectContainer.children[1]);
  projectNameListener(projectName, projectObject.id);
  projectDelbtnListener(delbtn, projectObject.id);
}

export function renderAllProjects() {
  projectsArray.forEach((project) => {
    projectRenderer(project);
  });
}
