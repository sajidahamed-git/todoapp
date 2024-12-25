import { removeDeletednote } from "./notesHandler";

export function noteRenderer(note) {
  const notesGrid = document.querySelector(".notesGrid");
  const noteCard = document.createElement("div");
  noteCard.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "m-4",
    "bg-white",
    "shadow-md",
    "rounded-lg",
    "p-6",
    "border",
    "border-gray-300",
  );

  // Note Title
  const noteTitle = document.createElement("h3");
  noteTitle.textContent = note.title;
  noteTitle.classList.add(
    "w-full",
    "text-lg",
    "font-semibold",
    "border", // Adds a border
    "border-gray-200",
    "rounded-lg",
    "p-2",
  );

  // Note Body
  const noteBody = document.createElement("div");
  noteBody.textContent = note.body;
  noteBody.classList.add(
    "text-sm",
    "w-full",
    "h-24",
    "border", // Adds a border
    "border-gray-200",
    "rounded-lg",
    "p-2",
  );

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Note";
  deleteButton.classList.add(
    "mt-4",
    "p-2",
    "bg-red-500",
    "text-white",
    "font-medium",
    "rounded-md",
    "hover:bg-red-600",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-red-400",
    "transition-colors",
    "duration-200",
  );
  deleteButton.addEventListener("click", () => {
    noteCard.remove(); // Removes the card
    console.log(note.id);
    removeDeletednote(note.id);
  });

  noteCard.appendChild(noteTitle);
  noteCard.appendChild(noteBody);
  noteCard.appendChild(deleteButton);

  notesGrid.insertBefore(noteCard, notesGrid.children[1]);
}
