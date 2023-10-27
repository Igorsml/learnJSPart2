Array.from(document.querySelectorAll(".draggable"), (el) => {
  let text = el.innerText;

  function update(e) {
    el.innerText = `${text}
    ${Math.round(e.clientX)} ${Math.round(e.clientY)}`;
  }

  const shouldCapture = el.hasAttribute("data-capture");
  el.addEventListener("pointerdown", (e) => {
    e.preventDefault();

    shouldCapture && el.setPointerCapture(e.pointerId);
    el.addEventListener("pointermove", update);
  });

  el.addEventListener("pointerup", (e) => {
    el.removeEventListener("pointermove", update);
    shouldCapture && el.releasePointerCapture(e.pointerId);
    el.innerText = "pointer up";
  });
});
