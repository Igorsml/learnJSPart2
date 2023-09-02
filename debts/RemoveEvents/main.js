let boxx = document.querySelector(".box");

function handleClick(e) {
  console.log("click");
}

function colorIn(e) {
  e.target.style.backgroundColor = "black";
}

function colorOut(e) {
  e.target.style.backgroundColor = "grey";
}

add.onclick = function () {
  if (boxx) {
    boxx.addEventListener("mouseenter", colorIn);
    boxx.addEventListener("mouseout", colorOut);
    boxx.addEventListener("click", handleClick);
    console.log("Обработчики добавлены");
  }
};

remove.onclick = function () {
  boxx.removeEventListener("click", handleClick);
  boxx.removeEventListener("mouseenter", colorIn);
  boxx.removeEventListener("mouseout", colorOut);
  console.log("Обработчики удалены");
};

// удаление обработчиков через клонирование
// const elementClone = boxx.cloneNode(true);
// boxx.parentNode.replaceChild(elementClone, boxx);
