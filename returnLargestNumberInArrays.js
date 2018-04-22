function largestOfFour(arr) {
  var largestArray = [];
  for (i = 0; i < arr.length; i++) {
    subArray = arr[i];
    largestArray[i] = returnLargestFromArray(subArray);
  }

  console.log(largestArray);
  return largestArray;
}

function returnLargestFromArray() {
  greatest = subArray[0];
  for (j = 0; j <= subArray.length; j++) {
    if (subArray[j + 1] >= greatest) {
      greatest = subArray[j + 1];
      console.log(greatest);
    }
  }
  return greatest;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
