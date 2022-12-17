function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const validForm = document.getElementById("validationForm");

// Const pour récupérer les éléments du formulaire
const firstName = document.getElementById("first");
const lestName = document.getElementById("last");
const mail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationTournament = document.getElementsByName("location");
const condition = document.getElementById("checkbox1");
const newsletter = document.getElementById("checkbox2");
const btnSubmit = document.getElementById("btn-submit");
const boxSubmit = document.getElementById("validatebox");
const submitBg = document.getElementById("bgroundValidateBox");
const btnValidate = document.getElementById("btnValidate");

// lancement modal formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// lancement modal formulaire event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fermeture modal formulaire
function closeModal() {
  modalbg.style.display = "none";
}

// fermeture modal formulaire event
modalBtnClose.addEventListener("click", closeModal);

// validation formulaire
function validate(event) {
  event.preventDefault();
  event.stopPropagation();
  submitBg.style.display = "block";
}
// validation formulaire event
validForm.addEventListener("submit", validate);

// fermeture modal formulaire
function closeValidate() {
  submitBg.style.display = "none";
  modalbg.style.display = "none";
}

// fermeture formulaire OK event
btnValidate.addEventListener("click", closeValidate);
