import { deleteButtonHandler, formHandling } from "./formHandling";

//initial eventlisteners to be loaded on screen
export function eventlisteners() {
    const popup = document.getElementById("newTaskDialog");

    const addNewBtn = document.querySelector(".addNewBtn");
    addNewBtn.addEventListener("click", () => {
        popup.showModal();
    });

    const taskForm = document.getElementById("taskform");
    taskForm.addEventListener("submit", function () {
        formHandling();
        popup.close();
    });

    const cancel = document.getElementById("Cancel");
    cancel.addEventListener("click", () => {
        popup.close();
    });
}
//event liteners for delete button loaded after user creates a note
export function addDeleteButtonListener(button, taskId) {
    button.addEventListener("click", () => deleteButtonHandler(button, taskId));
}
