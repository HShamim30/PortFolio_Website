  // Disable right click
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Disable key shortcuts
  document.addEventListener('keydown', e => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
    }
  });



  // Disbale control + u
  // Disable right click
  document.addEventListener("contextmenu", e => e.preventDefault());

  // Disable keys
  document.addEventListener("keydown", e => {
    if (
      e.ctrlKey && e.key.toLowerCase() === "u" ||     // Ctrl + U
      e.key === "F12" ||                              // F12
      (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(e.key.toLowerCase()))
    ) {
      e.preventDefault();
      alert("Source code is protected!");
    }
  });