//The first operation with start a empty array
// the first operation will use 3 elements
//
// 1st element -- first number
// 2nd element -- evaluator substraction/ multiplication that will be used to define the kind of operation
// 3rd element -- second number

// after the first operation the result will took the place
// of the first element and everything else will be processed as before

// TODO - TO SOLVE

// decimal just once
// evaluators just once

const buttons = document.querySelectorAll("button");
const evaluators = document.querySelectorAll(".evaluator");
const NumButtons = document.querySelectorAll(".digit");
const equal = document.querySelector(".equal");
const dec = document.querySelector(".dec");
const screen = document.querySelector("#screen");
const del = document.querySelector("#del");
const cle = document.querySelector("#cle");

const num = [];
const operation = [];
var result = 0;

cle.addEventListener("click", () => {
  console.log("clear");
  operation.length = 0;
  num.length = 0;
  screen.textContent = "";
});

del.addEventListener("click", () => {
  console.log("delete");
  num.splice(num.length - 1, 1);
  console.log(num.length);
  console.log(num);
  screen.textContent =
    operation.join(" ").toString() + " " + num.join("").toString();
});

numf();
evalf();

let numb = num.join("").toString();

function numf() {
  NumButtons.forEach((Nb) => {
    function clicked() {
      if (operation.length > 0) {
        dec.addEventListener("click", clicked);
      }
      console.log(operation);
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

      if (Nb.textContent == ".") {
        console.log("sasa");
        dec.removeEventListener("click", clicked);
      }
    }

    Nb.addEventListener("click", clicked);
  });
}

function evalf() {
  evaluators.forEach((eva) => {
    eva.addEventListener("click", () => {
      operation.push(numb);
      calc();
      console.log(operation);
      console.log(numb);
      operation.push(numb);
      screen.textContent = operation.join(" ").toString();
      num.length = 0;
      operation[1] = eva.textContent;

      screen.textContent = operation.join(" ").toString();

      if ((operation.length = 2)) {
      }
    });
  });
}

equal.addEventListener("click", () => {
  if (operation.length == 0) {
    screen.textContent = numb;
    console.log(numb);
  } else {
    screen.textContent = result;
    operation.push(numb);
    calc();
    console.log(operation);
  }
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
