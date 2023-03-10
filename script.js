// DOM selected all the elements in the document

const evaluators = document.querySelectorAll(".evaluator");
const NumButtons = document.querySelectorAll(".digit");
const equal = document.querySelector(".equal");
const screen = document.querySelector("#screen");
const del = document.querySelector("#del");
const cle = document.querySelector("#cle");

// declared number, operation and result value
const num = [];
const operation = [];
var result = 0;


// added event listener for clear and delete


cle.addEventListener("click", () => {
  // added styles timeout when keys are pressed
  cle.classList.add("pressed");
  setTimeout(() => {
    cle.classList.remove("pressed");
  }, 200);

  operation.length = 0;
  num.length = 0;
  screen.textContent = "";
});

del.addEventListener("click", () => {
   // added styles timeout when keys are pressed
  del.classList.add("pressed");
  setTimeout(() => {
    del.classList.remove("pressed");
  }, 200);

  num.splice(num.length - 1, 1);

  console.log(num)
  numb = num.join("").toString();
  console.log(numb)

  screen.textContent =
    operation.join(" ").toString() + " " + num.join("").toString();
});


// called methods for number, evaluators and keyboard listeners
numf();
evalf();
keyboard();

// declared numb which is the same as num but as a string
let numb = num.join("").toString();

// added dotI counter which counts if there's a dot in the number value
let dotI = 0;

function keyboard() {

  // added events listener for keys
  // if the key pressed is equal to a number or evaluator,
  // the respective one is clicked
  window.addEventListener("keydown", (e) => {
    const foundbtn = Array.from(NumButtons).findIndex(
      (n) => n.textContent == e.key
    );

    if (foundbtn != -1) {
      NumButtons[foundbtn].click();
    }
  });

  // added keydown conditionalss for:
  //  Enter = equal; Backspace = delete; Espape = clear

  window.addEventListener("keydown", (ev) => {
    if (ev.key == "Enter") {
      equal.click();
    } else if (ev.key == "Backspace") {
      del.click();
    } else if (ev.key == "Escape"){
      cle.click();
    }


    const foundev = Array.from(evaluators).findIndex(
      (evaluator) => evaluator.textContent == ev.key
    );
    if (foundev != -1) {
      evaluators[foundev].click();
    }
  });
}

// Numbers box events listeners added
function numf() {
  NumButtons.forEach((Nb) => {
    function clicked() {
         // added styles timeout when keys are pressed
      Nb.classList.add("pressed");
      setTimeout(() => {
        Nb.classList.remove("pressed");
      }, 200);

      calc();
      if (operation.length == 1) {
        num.length = 0;
        operation.length = 0;
        screen.textContent = operation.join(" ").toString();
        dotI = 0;
      }

      num.push(Nb.textContent);

      if (dotI == 1 && Nb.textContent == ".") {
        num.splice(num.length - 1, 1);
      }
      if (Nb.textContent == ".") {
        dotI = 1;
      }

      numb = num.join("").toString();
      screen.textContent = operation.join(" ").toString() + " " + numb;
      console.log(operation)
    }

    Nb.addEventListener("click", clicked);
  });
}

// evaluators event listener added
function evalf() {
  evaluators.forEach((eva) => {
    eva.addEventListener("click", () => {
      eva.classList.add("pressed");
      setTimeout(() => {
        eva.classList.remove("pressed");
      }, 200);

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
      numb = "";
    });
  });

  equal.addEventListener("click", () => {
    if (operation.length == 0) {
      screen.textContent = numb;
    } else {
      screen.textContent = result;
      operation.push(numb);
      calc();
    }
    num.length = 0;
  });
}



// added calculation method when the operation have 3 elements
function calc() {
  if (operation.length == 3) {
    console.log(operation)

    if (operation[1] == "+") {
      result = Number(operation[0]) + Number(operation[2]);
    } else if (operation[1] == "-") {
      result = Number(operation[0]) - Number(operation[2]);
    } else if (operation[1] == "/") {
      if(operation[2] == 0){
        result = undefined
      } else {
        result = Number(operation[0]) / Number(operation[2]);
      }

    } else if (operation[1] == "*") {
      result = Number(operation[0]) * Number(operation[2]);
    }

    result = Math.round(result * 100) / 100;

    screen.textContent = operation.join(" ").toString();
    operation.length = 0;
    numb = "";
    operation.push(result);
    screen.textContent = operation.join(" ").toString();
  }
}
