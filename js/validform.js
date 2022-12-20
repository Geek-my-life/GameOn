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
const regex = /^[a-zA-Z--_]+$/;

// verification prénom
function checkFirstName() {
  if (firstName.value.length < 2 || !firstName.value.match(regex)) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    firstName.style.border = "2px solid #e54858";
    return false;
  } else {
    first.parentElement.setAttribute("data-error-visible", "false");
    first.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}
