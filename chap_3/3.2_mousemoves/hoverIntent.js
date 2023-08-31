let mouseInside;
elem.onmouseenter = function (event) {
  mouseInside = true;
  setTimeout(() => {
    if (mouseInside) tooltip.hidden = false;
  }, 500);
};

elem.onmouseleave = function (event) {
  tooltip.hidden = true;
  mouseInside = false;
};
