// EDIT NAV
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// dom elements formulaire
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close");

// lancement formulaire event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lancement formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// fermeture formulaire event
closeBtn[0].addEventListener("click", closeModal);

// fermeture formulaire
function closeModal() {
  modalbg.style.display = "none";
}
