let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;
let displayCheck = "num1";
let result;

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
    calculate;
  } else if (displayCheck === "num2") {
    operator = e.target.innerText;
    calculate;
  } else if (displayCheck === "result") {
    displayCheck = "num2";
    num1 = result;
    num2 = "";
    operator = e.target.innerText;
    calculate;
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
