// dom elements formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const inputBirthdate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const conditions = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");
const regEx = /^([A-Za-z]){2,}?([-]){0,}?([A-Za-z]){0,}/;
const regExMail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// verification prénom nom
firstName.addEventListener("input", checkFirst);

function checkFirst() {
  if (!firstName.value.match(regEx)) {
    firstName.parentElement.setAttribute("data-error-visible", "true"); // mise en forme si error vrai
    firstName.style.border = "2px solid #e54858";
    return false;
  } else {
    firstName.parentElement.setAttribute("data-error-visible", "false"); // mise en forme si error faux
    firstName.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}

lastName.addEventListener("input", checkLast);

function checkLast() {
  if (!lastName.value.match(regEx)) {
    lastName.parentElement.setAttribute("data-error-visible", "true"); // mise en forme si error vrai
    lastName.style.border = "2px solid #e54858";
    return false;
  } else {
    lastName.parentElement.setAttribute("data-error-visible", "false"); // mise en forme si error faux
    lastName.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}
// verification mail
email.addEventListener("input", checkEmail);

function checkEmail() {
  if (!email.value.match(regExMail)) {
    // verification de la regex
    email.parentElement.setAttribute("data-error-visible", "true"); // mise en forme si error vrai
    email.style.border = "2px solid #e54858";
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false"); // mise en forme si error faux
    email.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}

// verification anniversaire
inputBirthdate.addEventListener("input", checkAge);

function checkAge() {
  const birthdate = new Date(inputBirthdate.value); // variable pour la valeur de la date saisie
  const age = calculateAge(birthdate); // variable qui va recuprer la fonction
  if (inputBirthdate.value.length === 0 || age < 18) {
    inputBirthdate.parentElement.setAttribute("data-error-visible", "true"); // mise en forme si error vrai
    inputBirthdate.style.border = "2px solid #e54858";
    return false;
  } else {
    inputBirthdate.parentElement.setAttribute("data-error-visible", "false"); // mise en forme si error faux
    inputBirthdate.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}

function calculateAge(birthdate) {
  const currentDate = new Date(); // variable de la date du jour
  let age = currentDate.getFullYear() - birthdate.getFullYear(); // calcul de la différence
  const monthDiff = currentDate.getMonth() - birthdate.getMonth(); // calcul pour voir si le mois est passé
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthdate.getDate()) // calcul pour voir si le jour est passé
  ) {
    age--;
  }
  return age;
}

// verification participation tournoi
quantity.addEventListener("input", checkQuantity);

function checkQuantity() {
  if (quantity.value.length === 0 || quantity.value < 0) {
    // verif si pas de saisie ou si 0
    quantity.parentElement.setAttribute("data-error-visible", "true"); // mise en forme si error vrai
    quantity.style.border = "2px solid #e54858";
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false"); // mise en forme si error faux
    quantity.style.border = "solid #279e7a 0.19rem";
    return true;
  }
}
// verification villes
allLocations.addEventListener("change", checkLocations);

function checkLocations() {
  allLocations.setAttribute("data-error-visible", "true"); // mise en forme si error vrai
  for (let i = 0; i < locations.length; i++) {
    // verif si 0 checked
    if (locations[i].checked) {
      allLocations.setAttribute("data-error-visible", "false"); // mise en forme si error faux
      return true;
    }
  }
  return false;
}

// verification conditions
conditions.addEventListener("change", checkConditions);

function checkConditions() {
  if (conditions.checked === false) {
    // verif si checked
    conditions.parentElement.setAttribute("data-error-visible", "true"); // mise en forme si vrai
    return false;
  } else {
    conditions.parentElement.setAttribute("data-error-visible", "false"); // mise en forme si faux
    return true;
  }
}

// validation globale
function checkAll() {
  checkFirst();
  checkLast();
  checkEmail();
  checkAge();
  checkQuantity();
  checkLocations();
  checkConditions();
}

function validForm() {
  if (
    checkFirst() === true &&
    checkLast() === true &&
    checkEmail() === true &&
    checkAge() === true &&
    checkQuantity() === true &&
    checkLocations() === true &&
    checkConditions() === true
  ) {
    return true;
  } else {
    return false;
  }
}

// envoi formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validForm() == true) {
    displayModalSubmit();
    document.querySelector("form").reset();
  } else {
    checkAll();
  }
});
