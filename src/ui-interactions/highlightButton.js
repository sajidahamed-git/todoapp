const buttons = document.querySelectorAll(".allTasks, .today, .thisweek, .notes");
export function highlightButton(buttonClass) {
    // Select all buttons by their specific classes
  
    // Remove highlight classes from all buttons
    buttons.forEach((button) => {
      button.classList.remove("bg-blue-500", "text-white", "font-bold");
    });
  
    // Add highlight class to the clicked button
    const clickedButton = document.querySelector(buttonClass);
    clickedButton.classList.add("bg-blue-500", "text-white", "font-bold");
  }
  export function removeAllHighlight(){
    // const buttons = document.querySelectorAll(".allTasks, .today, .thisweek, .notes");
        // Remove highlight classes from all buttons
        buttons.forEach((button) => {
          button.classList.remove("bg-blue-500", "text-white", "font-bold");
        });

  }

  // export function menuVisibility(){
  //   const menu = document.querySelector('.leftPane')
  //   // menu.classList.toggle('hidden')
  //   console.log(menu);

  // }
  export function menuVisibility() {
    const menu = document.querySelector('.leftPane');
    if (menu.classList.contains('opacity-100')) {
      menu.classList.replace('opacity-100', 'opacity-0');
      menu.classList.replace('visible', 'invisible');
    } else {
      menu.classList.replace('opacity-0', 'opacity-100');
      menu.classList.replace('invisible', 'visible');
    }
  }
  