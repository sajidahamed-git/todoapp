import { projectRenderer } from "./projectRenderer";
import { renderTasksByProjectId } from "./taskRenderer";
import { projectsArray, updateProjectsArray } from ".";

export function projectEventListeners() {
    const addNewproject = document.getElementById("addproject");
    const projectpopup = document.getElementById("newProjectDialog");

    addNewproject.addEventListener("click", () => {
        projectpopup.showModal();
    });

    const projectCancel = document.getElementById("projectCancel");
    projectCancel.addEventListener("click", function () {
        projectpopup.close();
    });

    // const projectSubmit = document.getElementById("projectSubmit");
    // projectSubmit.addEventListener('submit',function(){
    //     console.log('mikl');
    // })

    projectpopup.addEventListener("submit", projectFormhandling);
}

// let projectsArray = [];


function projectFormhandling() {
    const projectName = document.getElementById("projectTitle").value;
    const projectObject = createProjectObject(projectName);
    projectsArray.push(projectObject);
    populateProjectsDropdown(projectsArray);
    // console.log(projectsArray);
    const temp = projectsArray
    updateProjectsArray(temp)
    projectRenderer(projectObject);
}

let projectCounter = 0;
function createProjectObject(projectName) {
    return {
        id: projectCounter++,
        title: projectName,
    };
}
// function appendProjectList(projectObject) {
//     //project element is the individual element which contains each project
//     const projectelement = document.createElement("div");
//     projectelement.classList.add(
//         "projectElement",
//         "flex",
//         "gap-3",
//         "border-4",
//         "w-full",
//         "justify-between",
//         "px-4",
//     );
//     projectelement.setAttribute('data-id',projectObject.id)
//     const projectName = document.createElement("button");
//     projectName.classList.add('projectName')
//     projectName.textContent = projectObject.title;
//     projectelement.appendChild(projectName);

//     const delbtn = document.createElement("button");
//     // delbtn.classcList.add('')

//     const icon = document.createElement("img");
//     icon.src = trashIcon;
//     delbtn.appendChild(icon);
//     projectelement.appendChild(delbtn);

//     const projectContainer = document.getElementById("projectContainer");
//     projectContainer.appendChild(projectelement);
//     projectDelbtnListener(delbtn,projectObject.id);
// }
export function projectDelbtnListener(delbtn, projectId) {
    delbtn.addEventListener("click", function () {
        const projDiv = delbtn.closest(".projectElement");
        if (projDiv) {
            projDiv.remove();
        }
        const projFilterArray= projectsArray.filter(
            (projects) => projects.id !== projectId,
        );
        updateProjectsArray(projFilterArray)
    });
}
//populate project array in the popup dom of the addnote dialog box

function populateProjectsDropdown(projectsArray) {
    // Select the dropdown
    const projectDropdown = document.querySelector('select[name="project"]');

    // Clear existing options
    projectDropdown.innerHTML = "";

    // Add the "None" option
    const noneOption = document.createElement("option");
    noneOption.value = "";
    noneOption.textContent = "None";
    noneOption.selected = true;
    projectDropdown.appendChild(noneOption);

    // Dynamically add options from projectsArray
    projectsArray.forEach((project) => {
        const option = document.createElement("option");
        option.value = project.id; // Use project ID or name for value
        option.textContent = project.title; // Display project name in dropdown
        projectDropdown.appendChild(option);
    });
}
export function projectNameListener(projectName, projectId) {
    projectName.addEventListener("click", function () {
        // console.log(projectId);
        //render all tasks with this project id 
        renderTasksByProjectId(projectName,projectId)
    });
}
