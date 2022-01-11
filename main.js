// Solve Salary
const buttonSovle = document.querySelector("#solve-salary");
const daysInput = document.getElementById("days-input");
const decDay = document.getElementById("dec-day");
const incDay = document.getElementById("inc-day");
const salaryDay = 100000;

document.getElementById("salary-per-day").innerText =
  salaryDay.toLocaleString() + " VNĐ";

function getIncDay() {
  var daysWork = Number(daysInput.value);
  daysInput.value = daysWork + 1;

  salarySovle();
}

function getDecDay() {
  var daysWork = Number(daysInput.value);
  if (daysWork > 0) {
    daysInput.value = daysWork - 1;
  }
  salarySovle();
}

function salarySovle() {
  var daysWork = Number(daysInput.value);
  totalSalary = daysWork * salaryDay;
  if (totalSalary == 0) {
    document.querySelector("#total-salary").innerText = "Nhập đúng số ngày";
  } else {
    document.querySelector("#total-salary").innerText =
      totalSalary.toLocaleString() + " VNĐ";
  }
}
daysInput.addEventListener("change", salarySovle);
daysInput.addEventListener("keyup", salarySovle);
daysInput.addEventListener("keydown", salarySovle);
incDay.addEventListener("mousedown", getIncDay);
decDay.addEventListener("mousedown", getDecDay);

// Average

const numberInputs = document.querySelectorAll(".number-input");
const averageOutput = document.querySelector("#average");

function getAverage() {
  var totalNumber = 0;
  var averageNumber = 0;
  var numberInput = numberInputs.length;

  for (let i = 0; i < numberInput; i++) {
    totalNumber += Number(numberInputs[i].value);
  }
  averageNumber = totalNumber / numberInput;
  averageOutput.innerText = averageNumber.toFixed(2);
}

numberInputs.forEach((e) => {
  e.addEventListener("change", getAverage);
  e.addEventListener("keyup", getAverage);
  e.addEventListener("keydown", getAverage);
});

//QUY ĐỔI TIỀN

const exchangeRate = 23500;
const moneyInput = document.querySelector("#money-input");
const totalMoney = document.querySelector("#total-money");
const decMon = document.getElementById("dec-money");
const incMon = document.getElementById("inc-money");

function exchangeMoney() {
  let moneyExchange = 0;
  moneyExchange = Number(moneyInput.value * exchangeRate);
  if (moneyExchange > 0) {
    totalMoney.innerText = moneyExchange.toLocaleString() + "VNĐ";
  } else {
    totalMoney.innerText = "Nhập cho đúng điều kiện vào!";
  }
}

function getIncMoney() {
  var moneyUser = Number(moneyInput.value);
  moneyInput.value = moneyUser + 0.5;
  exchangeMoney();
}

function getDecMoney() {
  var moneyUser = Number(moneyInput.value);
  if (moneyUser > 0) {
    moneyInput.value = moneyUser - 0.5;
  }
  exchangeMoney();
}

document.getElementById("salary-per-money").innerText =
  exchangeRate.toLocaleString() + " VNĐ/1USD";

incMon.addEventListener("mousedown", getIncMoney);
decMon.addEventListener("mousedown", getDecMoney);
moneyInput.addEventListener("keyup", exchangeMoney);
moneyInput.addEventListener("keydown", exchangeMoney);
moneyInput.addEventListener("change", exchangeMoney);

// RECTANGLE

const rectangleSizes = document.querySelectorAll(".number-rectangle-input");
const acreageOutput = document.querySelector("#rectangle-acreage");
const perimeterOutput = document.querySelector("#rectangle-perimeter");

function getRetangleOutput(e) {
  let acreage = 1,
    perimeter = 0;
  for (let i = 0; i < rectangleSizes.length; i++) {
    acreage *= Number(rectangleSizes[i].value);
    perimeter += Number(rectangleSizes[i].value * 2);
  }
  if (acreage <= 0) {
    acreageOutput.innerText = "Nhập đúng các kích thước";
    perimeterOutput.innerText = "Nhập đúng các kích thước";
  } else {
    acreageOutput.innerText = acreage.toFixed(2) + "    đơn vị diện tích";
    perimeterOutput.innerText = perimeter.toFixed(1) + "   đơn vị chu vi";
  }
}

rectangleSizes.forEach((e) => {
  e.addEventListener("change", getRetangleOutput);
  e.addEventListener("keyup", getRetangleOutput);
  e.addEventListener("keydown", getRetangleOutput);
});

// KÝ SỐ

const numberValue = document.querySelector("#number-value");
const sumNumber = document.querySelector("#sum-number");

function sumNumbers() {
  let sumNumbers = 0,
    number = numberValue.value;
  if (Number(number) <= 0) {
    sumNumber.innerText = "Nhập đúng điều kiện đi!";
  } else {
    for (let i = 0; i < number.length; i++) {
      sumNumbers += Number(number[i]);
    }
    sumNumber.innerText = sumNumbers;
  }
}

numberValue.addEventListener("change", sumNumbers);
numberValue.addEventListener("keyup", sumNumbers);
numberValue.addEventListener("keydown", sumNumbers);
