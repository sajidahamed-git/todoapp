
import trashIcon from "./assets/trash.svg";
import { projectDelbtnListener } from "./projectEventListeners";
import { projectNameListener } from "./projectEventListeners";
export function projectRenderer(projectObject) {
    //project element is the individual element which contains each project
    const projectelement = document.createElement("div");
    projectelement.classList.add(
        "projectElement",
        "flex",
        "gap-3",
        "border-4",
        "w-full",
        "justify-between",
        "px-4",
    );
    projectelement.setAttribute('data-id',projectObject.id)
    const projectName = document.createElement("button");
    projectName.classList.add('projectName')
    projectName.textContent = projectObject.title;
    projectelement.appendChild(projectName);
    
    const delbtn = document.createElement("button");
    // delbtn.classcList.add('')
    
    const icon = document.createElement("img");
    icon.src = trashIcon;
    delbtn.appendChild(icon);
    projectelement.appendChild(delbtn);
    
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.appendChild(projectelement);
    projectNameListener(projectName,projectObject.id)
    projectDelbtnListener(delbtn,projectObject.id);
}