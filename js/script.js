var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

//function to close the modal
var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

//function expression to open the modal
var openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};

button.addEventListener("click", function () {
  openModal(); //using the function written before instead of repeating the code
});

modalX.addEventListener("click", function () {
  closeModal(); //using the function instead of repeating the code
});

//the picture - class list Modal closes after pressing Esc key
document.addEventListener("keydown", function (e) {
  // console.log(e.key)
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  }
});
