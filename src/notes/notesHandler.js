import { isArrayEmpty } from "..";
import { noteRenderer } from "./notesRenderer";
import { noteCardReset } from "./createInputCard";
let notesArray = [];

export function setNotesArray(arr) {
  notesArray = arr;
}
export function notesHandler() {
  const noteCard = document.querySelector(".noteCard");
  const noteTitleValue = document.querySelector(".noteTitle").value;
  const noteBodyValue = document.querySelector(".noteBody").value;

  if (noteBodyValue === "" && noteTitleValue === "") {
    console.log("emmpty");
    noteCard.style.border = "2px solid red";
    noteCard.classList.add("animate-shake");
    // remove the red border after 1 seconds

    setTimeout(() => {
      noteCard.classList.remove("animate-shake");
      noteCard.style.border = "";
    }, 1000);
  } else {
    const noteObject = createNotesObject(noteTitleValue, noteBodyValue);
    notesArray.push(noteObject);
    noteRenderer(noteObject);
    noteCardReset()
    localStorage.setItem("notesArray", JSON.stringify(notesArray));
  }
}

let notesCounter = 0;
function createNotesObject(title, body) {
  if (isArrayEmpty(notesArray)) {
    notesCounter = 0;
  } else {
    const lastNotesElement = notesArray[notesArray.length - 1];
    notesCounter = lastNotesElement.id + 1;
  }

  let noteObject = {
    id: notesCounter,
    title: title,
    body: body,
  };
  notesCounter++;
  return noteObject;
}

export function removeDeletednote(id) {
  notesArray = notesArray.filter((note) => note.id != id);
  localStorage.setItem("notesArray", JSON.stringify(notesArray));
}
