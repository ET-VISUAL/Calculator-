let input = window.document.querySelector("#input");
let output = window.document.querySelector("#output");
let isLastOperation = false;

function add(value) {
  if (input.innerText <= 8) {
    if (input.innerText === "0") {
      input.innerText = value;
    } else {
      input.innerText += value;
    }
  }
}

function addNum(num) {
  add(num);
  isLastOperation = false;
  calcOutput();
}

function addOperation(operation) {
  if (!isLastOperation) add(operation);
  isLastOperation = true;
}

function calcInput() {
  input.innerText = output.innerText;
}

function calcOutput() {
  output.innerText = eval(input.innerText);
}

function clear() {
  input.innerText = "0";
  output.innerText = "0";
}
