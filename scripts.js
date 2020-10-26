// Display error message
function displayError(message) {
  document.querySelector(".results").style.display = "none";
  document.querySelector(".error").innerHTML = message;
  document.querySelector(".error").style.display = "block";
}

// Display results
function displayResult(results) {
  document.querySelector(".error").style.display = "none";
  document.querySelector("#results").innerHTML = results;
  document.querySelector(".results").style.display = "block";
}

// Reset
document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector("form").reset();
  document.querySelector(".error").style.display = "none";
  document.querySelector(".results").style.display = "none";
});

// Form
document.querySelector("form").addEventListener("submit", function (event) {
  // Bloque l'envoi du formulaire
  event.preventDefault();

  // Récupération des données
  let number1 = parseInt(document.querySelector("#number1").value);
  let number2 = parseInt(document.querySelector("#number2").value);
  let selectedValue = document.querySelector("#operation").selectedOptions[0]
    .value;

  // Erreur : les inputs ne sont pas des nombres
  if (isNaN(number1) || isNaN(number2)) {
    displayError("Erreur : vous devez entrer un nombre");
    return;
  }

  // Erreur : operation non permise
  let operationsPermitted = ["+", "-", "*", "/"];
  if (!operationsPermitted.includes(selectedValue)) {
    /*
  if (
    selectedValue === "+" ||
    selectedValue === "-" ||
    selectedValue === "*" ||
    selectedValue === "/"
  ) {
      */
    displayError("Erreur : opération non permise");
    return;
  }

  // Calcul
  let results = 0;
  switch (selectedValue) {
    case "+":
      results = number1 + number2;
      break;
    case "-":
      results = number1 - number2;
      break;
    case "*":
      results = number1 * number2;
      break;
    case "/":
      if (number2 == 0) {
        displayError("Erreur : la division par zéro");
        return;
      }
      results = number1 / number2;
      break;
  }
  displayResult(results);
});
