import { formHandling } from "./formHandling";


export function eventlisteners() {

    const popup = document.getElementById("newTaskDialog");
    const addNewBtn = document.querySelector(".addNewBtn");
    addNewBtn.addEventListener("click", () => {
        popup.showModal();
    });
    
    const taskForm = document.getElementById("taskform");
    taskForm.addEventListener('submit',formHandling)
    
    
    // const submit = document.querySelector(".submit");
    // submit.addEventListener("click", () => {
    //     popup.close();
    // });
    
    
    



    const cancel = document.getElementById("Cancel");
    cancel.addEventListener("click", () => {
        popup.close();
    });

    // const deletebtn = document.querySelector('.deletebtn')
    // deletebtn.addEventListener('click',function(){
    //     console.log('washingtos');
    // })
}
