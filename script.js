let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;
let displayCheck = "num1";
let result;

//use displayCheck to check what is currently appearing in the display
// when click number button:
// - if displayCheck = num 1: add number to num1 => display num1
// - if displayCheck = num 2: add number to num2 => display num2
// when click operator button:
// - if displayCheck = num 1: change display check to num 2, get operator
// - if displayCheck = num2: get operator (I want to make it calculate then put result to num1, add number to num2 to start new calculation but cann't make yet)
// - if displayCheck = result: num1 = result, num2= "", displayCheck = num2

//Calculator can calculate decimals with button .
// button C is use to clear all data
// button delete is use to delete 1 charater when display num1, num2 and clear data when display result

const calculate = (num1, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  displayCheck = "result";
  if (operator === "+") {
    result = num1 + num2;
  }
  if (operator === "-") {
    result = num1 - num2;
  }
  if (operator === "/") {
    result = num1 / num2;
  }
  if (operator === "x") {
    result = num1 * num2;
  }
  console.log({ num1, num2 });
  console.log(operator);
  console.log(result);
  render();
};

const clearCalc = () => {
  (num1 = ""),
    (num2 = ""),
    (operator = null),
    (display["innerHTML"] = ""),
    (displayCheck = "num1");
};

const delbtn = () => {
  switch (displayCheck) {
    case "num1":
      console.log({ num1, num2 });
      num1 = num1.substring(num1.length - 1, 0);
      console.log({ num1, num2 });
      render();
      break;
    case "num2":
      console.log({ num1, num2 });
      num2 = num2.substring(num2.length - 1, 0);
      render();
      break;
    case "result":
      (num1 = ""),
        (num2 = ""),
        (operator = null),
        (display["innerHTML"] = ""),
        (displayCheck = "num1");
      render();
      break;
  }
};

const equalbtn = () => {
  calculate(num1, num2);
};

const render = () => {
  switch (displayCheck) {
    case "num1":
      display.textContent = num1;
      break;
    case "num2":
      display.textContent = num2;
      break;
    case "result":
      display.textContent = result;
      break;
  }
};

const handleBtnClick = (e) => {
  if (displayCheck === "num1") {
    num1 += e.target.innerText;
    render();
  } else if (displayCheck === "num2") {
    num2 += e.target.innerText;
    render();
  }
};

const handleOperatorClick = (e) => {
  if (displayCheck === "num1") {
    displayCheck = "num2";
    operator = e.target.innerText;
  } else if (displayCheck === "num2") {
    operator = e.target.innerText;
  } else if (displayCheck === "result") {
    displayCheck = "num2";
    num1 = result;
    num2 = "";
    operator = e.target.innerText;
  }
};

const btnNumber = document.querySelectorAll(".number");
btnNumber.forEach((btnNumber) =>
  btnNumber.addEventListener("click", handleBtnClick)
);

const btnOperator = document.querySelectorAll(".operator");
btnOperator.forEach((btnOperator) =>
  btnOperator.addEventListener("click", handleOperatorClick)
);

const btnClear = document.querySelector(".clear");
btnClear.addEventListener("click", clearCalc);

const btnDel = document.querySelector(".del");
btnDel.addEventListener("click", delbtn);

const btnEqual = document.querySelector(".equals");
btnEqual.addEventListener("click", equalbtn);
