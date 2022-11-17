const add = function (...args) {
  const result = args.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return result;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (number) {
  const result = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return Number(result);
};

const multiply = function (args) {
  const result = args.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
  return result;
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
