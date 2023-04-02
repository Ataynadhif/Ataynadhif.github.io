const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operation");
const display = document.querySelector(".displayNumber");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const decimal = document.querySelector(".decimal");

let currentNum = "0";
let calOperator = "";
let prevNum = "";

const updateScreen = (number) => {
  display.value = number;
};

const insertNumber = (number) => {
  if (currentNum === "0") {
    currentNum = number;
  } else {
    currentNum += number;
  }
};

const insertOperator = (operator) => {
  if (calOperator === "") {
    prevNum = currentNum;
  }
  calOperator = operator;
  currentNum = "";
};

const decimalNum = (dot) => {
  if (currentNum.includes(".")) {
    return;
  }
  currentNum += dot;
};

const calculate = () => {
  let result;
  switch (calOperator) {
    case "+":
      result = parseFloat(prevNum) + parseFloat(currentNum);
      break;
    case "-":
      result = parseFloat(prevNum) - parseFloat(currentNum);
      break;
    case "/":
      result = parseFloat(prevNum) / parseFloat(currentNum);
      break;
    case "*":
      result = parseFloat(prevNum) * parseFloat(currentNum);
      break;
    default:
      break;
  }
  currentNum = result;
  calOperator = "";
};
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    insertNumber(e.target.value);
    updateScreen(currentNum);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    insertOperator(e.target.value);
  });
});

equal.addEventListener("click", () => {
  calculate();
  updateScreen(currentNum);
});

ac.addEventListener("click", () => {
  prevNum = "";
  calOperator = "";
  currentNum = "0";
  updateScreen(currentNum);
});

decimal.addEventListener("click", (e) => {
  decimalNum(e.target.value);
  updateScreen(currentNum);
});
