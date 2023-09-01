const elem = document.querySelector("#elem1");

elem.addEventListener("click", () => console.log("click"));
elem.addEventListener("keydown", () => console.log("keydown"));
elem.addEventListener("onmouseover", () => console.log("onmouseover"));

elem.removeEventListener("click", () => console.log());
elem.removeEventListener("keydown", () => console.log("keydown"));
elem.removeEventListener("onmouseover", () => console.log("keydown"));

const elementClone = elem.cloneNode(true);
elem.parentNode.replaceChild(elementClone, element);
