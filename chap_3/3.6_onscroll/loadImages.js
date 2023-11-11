/**
 * Проверка видимости элемента (в видимой части страницы)
 * Достаточно, чтобы верхний или нижний край элемента был виден
 */

function isVisible(elem) {
  if (
    elem.getBoundingClientRect().top > 0 &&
    elem.getBoundingClientRect().top < document.documentElement.clientHeight
  ) {
    return elem;
  }
}

function showVisible() {
  for (let img of document.querySelectorAll("img")) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      realSrc += "?nocache=" + Math.random();
      img.src = realSrc;
      img.dataset.src = "";
    }
  }
}

window.addEventListener("scroll", showVisible);
showVisible();
