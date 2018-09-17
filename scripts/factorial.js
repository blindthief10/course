let factorial = function(num) {

    let result = 1;

    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
}

let calculateCombinations = function(x, y) {
  let totalCombinations = 0;
  for (let i = y; i <= x; i++) {

    totalCombinations += factorial(x) / (factorial(i) * factorial(x - i));
  }
  return totalCombinations;
}

console.log(calculateCombinations(5, 3));
