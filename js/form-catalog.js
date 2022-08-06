const btnOrder = document.getElementById("btn-order"),
  popupOrder = document.querySelector(".popup-order"),
  popupThanks = document.querySelector(".popup-thanks");
btnOrder.addEventListener("click", function (event) {
  event.preventDefault();
  popupOrder.classList.remove("is-active");
  popupThanks.classList.add("is-active");
});
