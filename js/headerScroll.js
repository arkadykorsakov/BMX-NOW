"use strict";
// определение устройства
const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: () => {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
/* header start */
const headerPage = document.querySelector(".header-page");

window.addEventListener("scroll", function () {
  if (window.matchMedia("(max-width: 992px)").matches) {
    return;
  }
  if (window.pageYOffset > 0) {
    headerPage.classList.add("is-active");
  } else {
    headerPage.classList.remove("is-active");
  }
});
/* header end */

// выплывающее меню
if (isMobile.any()) {
  document.body.classList.add("_touch");
  const headerPageArrows = document.querySelectorAll(".header-page__arrow");
  if (headerPageArrows.length > 0) {
    for (const headerPageArrow of headerPageArrows) {
      headerPageArrow.addEventListener("click", function (e) {
        headerPageArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}
