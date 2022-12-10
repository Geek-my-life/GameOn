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
const modalBtnClose = document.querySelector (".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById ("form");
const validForm = document.querySelector(".validationForm");


// Const pour récupérer les éléments du formulaire
const firstName = document.getElementById ("first");
const lestName = document.getElementById ("last");
const mail = document.getElementById ("email");
const birthDate = document.getElementById ("birthdate");
const quantity = document.getElementById ("quantity");
const locationTournament = document.getElementsByName ("location");
const condition = document.getElementById ("checkbox1");
const newsletter = document.getElementById ("checkbox2");
const btnSubmit = document.querySelector (".btn-submit");

// launch modal event clic
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal button clic
modalBtnClose.addEventListener("click", function() {
  modalbg.style.display = "none";
});