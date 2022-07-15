const factorialOfNumber = require("../factorial/index");

const ratioOfTwoNumbers = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const object = {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num3),
  };
  return object;
};

module.exports = ratioAndFactorial;
