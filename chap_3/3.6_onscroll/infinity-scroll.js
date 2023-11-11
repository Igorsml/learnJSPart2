const item = document.querySelector(".container");
const revealPoint = 100;

function addDate() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
<p>Date: ${new Date()}</p>

`
  );
}

function setInfinitePage() {
  while (
    document.documentElement.offsetHeight -
      window.pageYOffset -
      window.innerHeight <
    revealPoint
  ) {
    addDate();
  }
}

window.addEventListener("scroll", setInfinitePage);
