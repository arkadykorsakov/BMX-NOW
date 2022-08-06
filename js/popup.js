"use strict";
/* popup start */

const showPopup = function (target) {
  target.classList.add("is-active");
};

const closePopup = function (target) {
  target.classList.remove("is-active");
};

body.addEventListener("click", function (e) {
  let target = e.target;
  let popupClass = closestAttr(target, "data-popup");

  if (popupClass === null) {
    return;
  }

  e.preventDefault();
  let popup = document.querySelector("." + popupClass);

  if (popup) {
    showPopup(popup);
    toggleScroll();
  }
});

body.addEventListener("click", function (e) {
  let target = e.target;

  if (
    target.classList.contains("popup-close") ||
    target.classList.contains("popup__inner")
  ) {
    let popup = closestItemByClass(target, "popup");

    closePopup(popup);
    toggleScroll();
  }
});

body.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") {
    return;
  }

  let popup = document.querySelector(".popup.is-active");

  if (popup) {
    closePopup(popup);
    toggleScroll();
  }
});
/* popup end */
