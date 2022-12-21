// dom elements formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");
const regEx = /^([A-Za-z]){2,}?([-]){0,}?([A-Za-z]){0,}/;
const regExMail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// verification prénom nom
firstName.addEventListener(
  "input", // event à la saisie
  function () {
    // on appelle une fonction
    checkInputText(firstName); // la fonction et l'element que l'on souhaite
  },
  false
);
lastName.addEventListener(
  "input",
  function () {
    checkInputText(lastName);
  },
  false
);

function checkInputText(element) {
  if (!element.value.match(regEx)) {
    element.parentElement.setAttribute("data-error-visible", "true");
    element.style.border = "2px solid #e54858";
    return false;
  } else {
    element.parentElement.setAttribute("data-error-visible", "false");
    element.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}

// verification mail
email.addEventListener("input", checkEmail);

function checkEmail() {
  if (!email.value.match(regExMail)) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.style.border = "2px solid #e54858";
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}

// verification anniversaire

// verification participation tournoi
quantity.addEventListener("input", checkQuantity);

function checkQuantity() {
  if (quantity.value.length === 0 || quantity.value < 0) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.style.border = "2px solid #e54858";
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
    quantity.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}
// verification villes

// verification conditions
