"use strict";

const grid = document.querySelector(".grid");

const msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  horizontalOrder: true,
  fitWidth: true,
  gutter: 43,
});
