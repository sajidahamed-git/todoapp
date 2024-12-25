import trashIcon from "../assets/trash.png";

import autoAnimate from "@formkit/auto-animate";
const projectList = document.querySelector(".projectList");
autoAnimate(projectList);

import {
  projectDelbtnListener,
  projectNameListener,
} from "./projectEventListeners";

export function projectRenderer(projectObject) {
  //project element is the individual element which contains each project
  const projectelement = document.createElement("div");
  projectelement.classList.add("projectElement",
    "flex",
    "items-center",
    "justify-between",
    'w-full'
  );

  projectelement.setAttribute("data-id", projectObject.id);
  //projectName is actually a button

  const projectName = document.createElement("button");
  projectName.classList.add(
    "projectName",
    "text-xl",
    "p-2", // Padding (vertical)
    "my-2",
    "flex-grow",
    "text-left",
    "rounded-lg", // Rounded corners
    "border-2",
    "border-solid",
    "border-blue-400",
    "hover:bg-blue-300", // Darker background on hover
    "focus:outline-none", // Remove outline on focus
    "focus:ring-2", // Focus ring for accessibility
    "focus:bg-blue-600" // Color of focus ring
  );

  projectName.textContent = projectObject.title;

  const delbtn = document.createElement("button");
  delbtn.classList.add('ml-2',"hover:bg-red-300","rounded-lg")
  const icon = document.createElement("img");
  icon.classList.add('w-6')
  icon.src = trashIcon;
  delbtn.appendChild(icon);

  projectelement.appendChild(projectName);
  projectelement.appendChild(delbtn);

  projectList.prepend(projectelement);
  projectNameListener(projectName, projectObject.id);
  projectDelbtnListener(delbtn, projectObject.id);
}

export function renderAllProjects() {
  projectsArray.forEach((project) => {
    projectRenderer(project);
  });
}
