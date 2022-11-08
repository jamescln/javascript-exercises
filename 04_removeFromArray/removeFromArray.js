const removeFromArray = function (inputArray, ...removalTargets) {
  for (let i = 0; i < removalTargets.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j] === removalTargets[i]) {
        inputArray.splice([j], 1);
      }
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
