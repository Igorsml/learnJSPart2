const item = document.querySelector(".container");
const windowHeight = window.innerHeight;
const itemTop = document.body.getBoundingClientRect().top;
const revealPoint = 100;

window.addEventListener("scroll", setInfinitePage);

function setInfinitePage() {
  if (itemTop < windowHeight - revealPoint) {
    console.log("itemTop:", itemTop);
    console.log("windowHeight:", windowHeight);
    console.log(document.body.offsetHeight);
    console.log("scroll");
    item.insertAdjacentHTML("beforeend", `<p>Дата: ${new Date()}</p>`);
  }
}
