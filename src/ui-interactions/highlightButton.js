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
  // export function menuVisibility() {
  //   const menu = document.querySelector('.leftPane');
  //   if (menu.classList.contains('sm:opacity-100')) {
  //     menu.classList.replace('sm:opacity-100', 'sm:opacity-0');
  //     menu.classList.replace('sm:visible', 'sm:invisible');
  //   } else {
  //     menu.classList.replace('sm:opacity-0', 'sm:opacity-100');
  //     menu.classList.replace('sm:invisible', 'sm:visible');
  //   }
  // }
  export function menuVisibility() {
    const menu = document.querySelector('.leftPane');
  
    // For larger screens
    if (window.innerWidth >= 640) { // 640px is Tailwind's `sm` breakpoint
      if (menu.classList.contains('sm:opacity-100')) {
        menu.classList.replace('sm:opacity-100', 'sm:opacity-0');
        menu.classList.replace('sm:visible', 'sm:invisible');
      } else {
        menu.classList.replace('sm:opacity-0', 'sm:opacity-100');
        menu.classList.replace('sm:invisible', 'sm:visible');
      }
    } 
    // For smaller screens
    else {
      menu.classList.toggle('hidden');
    }
  }
  