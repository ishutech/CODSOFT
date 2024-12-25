const displayElement = document.getElementById("display");
let displayValue = "0";

function appendNumber(number) {
  if (displayValue === "0") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  const lastChar = displayValue[displayValue.length - 1];
  if (!isNaN(lastChar) || lastChar === "%") {
    displayValue += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1) || "0";
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue.replace("%", "/100")).toString();
  } catch {
    displayValue = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  displayElement.textContent = displayValue;

  const length = displayValue.length;
  if (length > 12) {
    displayElement.style.fontSize = "1.5rem"; 
  } else if (length > 8) {
    displayElement.style.fontSize = "2rem"; 
    displayElement.style.fontSize = "2.5rem"; 
  }
}
