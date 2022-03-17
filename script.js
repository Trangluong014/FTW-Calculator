let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;
let previousButton = null;

const calculate = (num1, num2) => {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
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
  console.log(result);
  display.textContent = result;
};

const clearCalc = () => {
  (num1 = ""), (num2 = ""), (operator = null), (display["innerHTML"] = "");
};

const delbtn = () => {
  (num1 = ""), (num2 = ""), (operator = null), (display["innerHTML"] = "");
};

const handleBtnClick = (e) => {
  if (operator) {
    num2 += e.target.innerText;
    display.textContent = num2;
  } else {
    num1 += e.target.innerText;
    display.textContent = num1;
  }
};

const handleOperatorClick = (e) => {
  if (e.target.innerText === "=") {
    calculate(num1, num2);
  } else if (operator && num2) {
    num1 = result;
    num2 = "";
    calculate(num1, num2);
    operator = e.target.innerText;
  } else {
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
