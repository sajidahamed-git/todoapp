import "./styles.css";
import { appendTodolist } from "./appendTodolist";


const tasks = [
    {
        id: 1,
        title: "Buy groceries",
        dueDate: "06-12-2024",
        completed: false,
        projectId: 1, // Links to a project if applicable
    },
    {
        id: 2,
        title: "Call the plumber",
        dueDate: "12-12-2012",
        completed: true,
        projectId: null, // No project assigned
    },
];
const projects = [
    {
        id: 1,
        name: "Personal",
    },
    {
        id: 2,
        name: "Work",
    },
];
console.log(tasks[0]);

const addnewbtn = document.querySelector('.addbutton')
addnewbtn.addEventListener('click',()=>appendTodolist(tasks[1]))