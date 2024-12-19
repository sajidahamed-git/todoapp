import { projectRenderer } from "./projectRenderer";
import { renderTasksByProjectId } from "../tasks/taskRenderer";
import { isArrayEmpty} from "..";
let projectsArray = []

export function setProjectsArray(arr){
  projectsArray = arr
}
export function projectEventListeners() {
  const addProjectbtn = document.getElementById("addProjectbtn");
  const projectNameInput = document.getElementById("projectName");
  // populateProjectsDropdown(projectsArray);
  addProjectbtn.addEventListener("click", () => {
    const projectName = projectNameInput.value.trim();
    projectNameInput.value = "";

    if (projectName === "") {
      console.log("enter something");
      projectNameInput.style.border = "2px solid red";
      projectNameInput.classList.add("animate-shake");
      // Remove the red border after 2 seconds
      setTimeout(() => {
        projectNameInput.classList.remove("animate-shake");
        projectNameInput.style.border = "";
      }, 1000); // 1000 ms = 1 seconds

      return;
    }
    const projectObject = createProjectObject(projectName);
    projectRenderer(projectObject);
    projectsArray.push(projectObject);
    localStorage.setItem('projectsArray',JSON.stringify(projectsArray))
    populateProjectsDropdown(projectsArray);
  });
}
//save project counter in local storate to get correct
//project ids
let projectCounter = 0;
function createProjectObject(projectName) {
  if (isArrayEmpty(projectsArray)) {
    projectCounter = 0;
  } else {
    const lastProjectElement = projectsArray[projectsArray.length - 1];
    projectCounter = lastProjectElement.id + 1;
  }
  let project = {
    id: projectCounter,
    title: projectName,
  };
  projectCounter++;

  return project;
}

export function projectDelbtnListener(delbtn, projectId) {
  delbtn.addEventListener("click", function () {
    const projDiv = delbtn.closest(".projectElement");
    if (projDiv) {
      projDiv.remove();
    }
    projectsArray = projectsArray.filter((projects) => projects.id !== projectId
    );
    localStorage.setItem('projectsArray',JSON.stringify(projectsArray))
  });
}
//populate project array in the popup dom of the addnote dialog box

function populateProjectsDropdown(projectsArray) {
  // Select the dropdown
  console.log("mango");
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
    renderTasksByProjectId(projectName, projectId);
  });
}
