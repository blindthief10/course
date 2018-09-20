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

let moneyPerBet = function(budget, poolNum, startNum) {
  return budget / calculateCombinations(poolNum, startNum);
}

console.log(moneyPerBet(20, 5, 3));
console.log(moneyPerBet(60, 9, 7));
