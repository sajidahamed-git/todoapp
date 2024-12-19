let notesArray = [];
export function setNotesArray(arr) {
  notesArray = arr;
}
import { isArrayEmpty } from ".";
import { noteRenderer } from "./notesRenderer";

export function notesHandler() {
  const noteTitleValue = document.querySelector(".noteTitle").value;
  const noteBodyValue = document.querySelector(".noteBody").value;

  const noteObject = createNotesObject(noteTitleValue, noteBodyValue);
  notesArray.push(noteObject);
  noteRenderer(noteObject);
  console.log(notesArray);
  localStorage.setItem("notesArray", JSON.stringify(notesArray));

  // notesRenderer(notesArray);
  // notesArray.forEach(note => {
  //   noteRenderer(note)
  // });
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
