let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;
let previousButton = null;

const handleBtnClick = (e) => {
  if (operator) {
    num2 += e.target.value;
  } else {
    num1 += e.target.value;
  }
  console.log({ num1, num2 });
};

const calculate = (num1, num2) => {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if ((operator = "+")) {
    result = num1 + num2;
  }
  if ((operator = "-")) {
    result = num1 - num2;
  }
  if ((operator = "/")) {
    result = num1 / num2;
  }
  if ((operator = "x")) {
    result = num1 * num2;
  }
  console.log(result);
};

const handleOperatorClick = (e) => {
  if (e.target.textContent === "=") {
    calculate(num1, num2);
  } else if (operator && num2) {
    calculate(num1, num2);
    num1 = result;
    num2 = "";
    operator = e.target.textContent;
  } else {
    operator = e.target.textContent;
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
