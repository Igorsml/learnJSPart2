document.body.addEventListener("keydown", (event) => {
  const target = event.target;
  const tagName = target.tagName.toLowerCase();

  if (
    event.key === "Backspace" &&
    tagName !== "input" &&
    tagName !== "textarea"
  ) {
    event.preventDefault();
    window.history.back();
  }
});

document.body.addEventListener("mouseup", (event) => {
  if (event.button === 3 || event.button === 4) {
    event.preventDefault();
    window.history.back();
  }
});
