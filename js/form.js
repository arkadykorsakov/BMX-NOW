const popupThanks = document.querySelector(".popup-thanks"),
  btnQuest = document.getElementById("btn-quest");

btnQuest.addEventListener("click", function (event) {
  event.preventDefault();
  popupThanks.classList.add("is-active");
});
