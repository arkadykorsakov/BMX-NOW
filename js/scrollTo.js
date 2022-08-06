"use strict";
const scroll = function (target) {
  let targetTop = target.getBoundingClientRect().top;
  let scrollTop = window.pageYOffset;
  let targetOffsetTop = targetTop + scrollTop;
  let headerOffset = document.querySelector(".header-page").clientHeight;

  window.scrollTo(0, targetOffsetTop - headerOffset);
};

body.addEventListener("click", function (e) {
  let target = e.target;
  let scrollToItemClass = closestAttr(target, "data-scroll-to");

  if (scrollToItemClass === null) {
    return;
  }

  e.preventDefault();
  let scrollToItem = document.querySelector("." + scrollToItemClass);

  if (scrollToItem) {
    scroll(scrollToItem);
  }
});
