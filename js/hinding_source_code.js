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
