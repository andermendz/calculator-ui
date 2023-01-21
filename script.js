//The first operation with start a empty array
// the first operation will use 3 elements
//
// 1st element -- first number
// 2nd element -- evaluator substraction/ multiplication that will be used to define the kind of operation
// 3rd element -- second number

// after the first operation the result will took the place
// of the first element and everything else will be processed as before

const buttons = document.querySelectorAll("button");
const evaluators = document.querySelectorAll(".evaluator");
const NumButtons = document.querySelectorAll(".digit");
const equal = document.querySelector(".equal");
const screen = document.querySelector("#screen");
const del = document.querySelector("#del");
const cle = document.querySelector("#cle");

const num = [];
const operation = [];
var result = 0;

numf();
evalf();

let numb = num.join("").toString();

function numf() {
  NumButtons.forEach((Nb) => {
    Nb.addEventListener("click", () => {
      calc();
      if (operation.length == 1) {
        num.length = 0;
        operation.length = 0;
        screen.textContent = operation.join(" ").toString();
      }

      num.push(Nb.textContent);

      numb = num.join("").toString();

      screen.textContent = operation.join(" ").toString() + " " + numb;
      console.log(
        (screen.textContent = operation.join(" ").toString() + " " + numb)
      );
    });
  });
}

function evalf() {
  evaluators.forEach((eva) => {
    eva.addEventListener("click", () => {
      console.log(numb);
      operation.push(numb);
      screen.textContent = operation.join(" ").toString();
      num.length = 0;
      operation[1] = eva.textContent;
      calc();
      screen.textContent = operation.join(" ").toString();
    });
  });
}

equal.addEventListener("click", () => {
  screen.textContent = result;
  operation.push(numb);
  calc();
  console.log(operation);
});
function calc() {
  if (operation.length == 3) {
    console.log(operation.length);
    if (operation[1] == "+") {
      result = Number(operation[0]) + Number(operation[2]);
    } else if (operation[1] == "-") {
      result = Number(operation[0]) - Number(operation[2]);
    } else if (operation[1] == "/") {
      result = Number(operation[0]) / Number(operation[2]);
    } else if (operation[1] == "X") {
      result = Number(operation[0]) * Number(operation[2]);
    }

    screen.textContent = operation.join(" ").toString();
    console.log(result);
    console.log(operation);
    operation.length = 0;
    numb = "";
    operation.push(result);
    screen.textContent = operation.join(" ").toString();
    console.log((screen.textContent = operation.join(" ").toString()));
  }
}
