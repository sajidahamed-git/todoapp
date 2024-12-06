import trashIcon from "./assets/trash.svg";
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

let projectsArray = [];
window.projectsArray = projectsArray
function projectFormhandling() {
    const projectName = document.getElementById("projectTitle").value;
    const projectObject = createProjectObject(projectName);
    projectsArray.push(projectObject);
    populateProjectsDropdown(projectsArray);
    // console.log(projectsArray);
    appendProjectList(projectObject);
}

let projectCounter = 0;
function createProjectObject(projectName) {
    return {
        id: projectCounter++,
        title: projectName,
    };
}
function appendProjectList(projectObject) {
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
    const projectName = document.createElement("div");
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
    projectDelbtnListener(delbtn,projectObject.id);
}
function projectDelbtnListener(delbtn,projectID) {
    console.log(delbtn);
    delbtn.addEventListener("click", function () {
        const projDiv = delbtn.closest(".projectElement");
        console.log(projDiv);
        if (projDiv) {
            projDiv.remove();
        }
        console.log(projectID);
        projectsArray = projectsArray.filter((projects)=> projects.id !== projectID)
        console.log(projectsArray);
    });
}
//populate project array in the popup dom of the addnote dialog box

function populateProjectsDropdown(projectsArray) {
    // Select the dropdown
    const projectDropdown = document.querySelector('select[name="project"]');

    // Clear existing options
    projectDropdown.innerHTML = '';

    // Add the "None" option
    const noneOption = document.createElement('option');
    noneOption.value = '';
    noneOption.textContent = 'None';
    noneOption.selected = true;
    projectDropdown.appendChild(noneOption);

    // Dynamically add options from projectsArray
    projectsArray.forEach((project) => {
        const option = document.createElement('option');
        option.value = project.id// Use project ID or name for value
        option.textContent = project.title; // Display project name in dropdown
        projectDropdown.appendChild(option);
    });
}

// Example usage
// const projectsArray = [
//     { id: 'project1', name: 'Project 1' },
//     { id: 'project2', name: 'Project 2' },
//     { id: 'project3', name: 'Project 3' },
// ];
