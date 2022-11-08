const repeatString = function (string, num) {
  if (num >= 0) {
    let returnString = "";
    for (let i = 0; i < num; i++) {
      returnString += string;
    }
    return returnString;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
