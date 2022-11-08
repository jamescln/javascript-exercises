const sumAll = function (num1, num2) {
  let result;
  if (
    num1 >= 0 &&
    num2 >= 0 &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    if (num1 < num2) {
      result = num1;
      for (let i = num1 + 1; i <= num2; i++) {
        result += i;
      }
    } else if (num1 > num2) {
      result = num2;
      for (let i = num2 + 1; i <= num1; i++) {
        result += i;
      }
    }
  } else {
    return "ERROR";
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
