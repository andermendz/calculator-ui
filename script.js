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

let dotI = 0;

function numf() {
  NumButtons.forEach((Nb) => {
    function clicked() {
      calc();
      if (operation.length == 1) {
        num.length = 0;
        operation.length = 0;
        screen.textContent = operation.join(" ").toString();
        dotI = 0;
      }

      num.push(Nb.textContent);

      console.log(dotI);
      console.log(num.length);

      if (dotI == 1 && Nb.textContent == ".") {
        num.splice(num.length - 1, 1);
      }
      if (Nb.textContent == ".") {
        dotI = 1;
      }

      numb = num.join("").toString();

      screen.textContent = operation.join(" ").toString() + " " + numb;
      console.log(
        (screen.textContent = operation.join(" ").toString() + " " + numb)
      );
    }

    Nb.addEventListener("click", clicked);
  });
}

function evalf() {
  evaluators.forEach((eva) => {
    eva.addEventListener("click", () => {
      if (operation.length == 2 && numb == "") {
        operation[1] = eva.textContent;
        operation.length = 1;
      }

      dotI = 0;
      operation.push(numb);

      calc();

      screen.textContent = operation.join(" ").toString();
      num.length = 0;
      operation[1] = eva.textContent;
      screen.textContent = operation.join(" ").toString();
      console.log(operation.length);
      numb = "";
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

    result = Math.round(result * 100) / 100;

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
