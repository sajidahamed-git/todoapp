export function eventlisteners() {
    const popup = document.getElementById("newTaskDialog");
    const addNewBtn = document.querySelector(".addNewBtn");
    const cancel = document.getElementById("Cancel");
    addNewBtn.addEventListener("click", () => {
        popup.showModal();
    });
    cancel.addEventListener("click", () => {
        popup.close();
    });
}
