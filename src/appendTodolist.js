import trashIcon from "./assets/trash.svg";


import { addDeleteButtonListener } from "./eventlisteners";
export function appendTodolist(taskObject) {
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
    );

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("w-6", "h-6");

    const title = document.createElement("div");
    title.textContent =taskObject.title;

    
    const dueDate = document.createElement("div");
    dueDate.textContent =taskObject.dueDate;
    
    //leftside has the checkbox title and duedate
    const leftside = document.createElement('div')
    leftside.appendChild(checkbox)
    leftside.appendChild(title)
    leftside.appendChild(dueDate)
    leftside.classList.add('flex','gap-4','items-center','w-3/5',
        'justify-between'
    )

    todoElement.appendChild(leftside)


    const details = document.createElement("button");
    details.textContent = "Details"
    details.classList.add(
        "details",
        "px-4",
        "py-2",
        "bg-blue-500",
        "text-white",
        "rounded-lg",
        "hover:bg-blue-600",
    );

    
    const delbtn = document.createElement("button");
    delbtn.classList.add('deletebtn')
    
    const icon = document.createElement("img");
    icon.src = trashIcon;
    delbtn.appendChild(icon)
    
    //event listener is added to the delete button
    addDeleteButtonListener(delbtn,taskObject.id)
    
    //rightside has details and deletet button
    const rightside = document.createElement('div')
    rightside.appendChild(details)
    rightside.appendChild(delbtn)
    rightside.classList.add('flex','gap-4','w-2/5','justify-around')
    todoElement.appendChild(rightside)

    const notesContainer = document.querySelector(".notesContainer");
    notesContainer.appendChild(todoElement);

// console.log(todoElement);
}
