import { notesHandler } from "./notesHandler";

export function createNoteInputCard() {
  const notesHeading = document.querySelector(".notesContainer");
  notesHeading.textContent = "All Notes";
  notesHeading.classList.add("w-full");

  const notesGrid = document.createElement("div");
  notesGrid.classList.add(
    "notesGrid",
    "grid",

    "grid-auto-rows",
    "sm:gap-6",
    "sm:grid-cols-3",
    "sm:px-4",
    "sm:py-8",
  );
  notesHeading.appendChild(notesGrid);

  const noteCard = document.createElement("div");
  noteCard.classList.add(
    "noteCard",
    "flex",
    "flex-col", // Aligns child elements vertically
    "gap-4", // Adds a larger gap between child elements
    "m-4",
    // "w-full", // Makes the note card take the full width of its container
    "bg-white", // Sets the background color to white
    "shadow-lg", // Adds a soft shadow for a lifted look
    "rounded-lg", // Rounds the corners for a modern feel
    "p-6", // Adds padding inside the card
    "border", // Adds a border
    "border-gray-200", // Sets the border color
    "hover:shadow-xl", // Enhances the shadow on hover
    "transition-shadow", // Smoothens the shadow change
    "duration-200",
  );
  const noteTitle = document.createElement("input");
  noteTitle.placeholder = "Enter Note Title";
  noteTitle.classList.add(
    "noteTitle",
    "w-full", // Makes the input field span the full width
    "p-2", // Adds padding inside the input
    "text-lg", // Sets a larger font size for the title
    "font-medium", // Uses a medium font weight for emphasis
    "border", // Adds a border
    "border-gray-300", // Sets the border color
    "rounded-md", // Rounds the input corners
    "focus:outline-none", // Removes the blue outline on focus
    "focus:ring-2", // Adds a focus ring
    "focus:ring-blue-400", // Sets the focus ring color
  );
  const noteBody = document.createElement("textarea");
  noteBody.placeholder = "enter note contents";
  noteBody.classList.add(
    "noteBody",
    "w-full", // Makes the textarea span the full width
    "p-2", // Adds padding inside the textarea
    "h-24", // Sets a default height for the textarea
    "text-base", // Sets a readable font size
    "border", // Adds a border
    "border-gray-300", // Sets the border color
    "rounded-md", // Rounds the corners
    "resize-none", // Prevents resizing to maintain consistency
    "focus:outline-none", // Removes the default blue outline on focus
    "focus:ring-2", // Adds a focus ring
    "focus:ring-blue-400", // Sets the focus ring color
  );
  const addnotesButton = document.createElement("button");
  addnotesButton.textContent = "Add Note";
  addnotesButton.classList.add(
    "mt-2", // Adds a top margin for spacing
    "p-2", // Adds padding to the button
    "bg-blue-500", // Sets the background color
    "text-white", // Sets the text color to white
    "font-medium", // Makes the text slightly bold
    "rounded-md", // Rounds the corners
    "hover:bg-blue-600", // Darkens the background on hover
    "focus:outline-none", // Removes the default outline on focus
    "focus:ring-2", // Adds a focus ring
    "focus:ring-blue-400", // Sets the focus ring color
    "transition-colors", // Smoothens the color transition
    "duration-200",
  );
  addnotesButton.setAttribute("id", "addnotesButton");
  noteCard.appendChild(noteTitle);
  noteCard.appendChild(noteBody);
  noteCard.appendChild(addnotesButton);

  notesGrid.appendChild(noteCard);

  addnotesButton.addEventListener("click", function () {
    notesHandler();
  });

  return notesGrid;
}

export function noteCardReset() {
  const noteTitle = document.querySelector(".noteTitle");
  const noteBody = document.querySelector(".noteBody");
  noteTitle.value = "";
  noteBody.value = "";
}
