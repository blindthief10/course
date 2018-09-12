function fizzBuzz(currentNum, endNum, smallDivisible, biggerDivisible) {

      if (currentNum >= endNum) {
        console.log(`The ${currentNum} cannot be bigger than ${endNum}`);
        return;
      }

      while (endNum >= currentNum) {

        if (currentNum % smallDivisible === 0 && currentNum % biggerDivisible === 0) {
          console.log(`FizzBuzz`);
        } else if (currentNum % smallDivisible === 0) {
          console.log(`Fizz`);
        } else if (currentNum % biggerDivisible === 0) {
          console.log('Buzz');
        } else {
          console.log(currentNum);
        }
        currentNum++;
      }

}






function testResult(score, name) {

  if (score < 1 || score > 100) {
    console.log('The score value must be between 1 and 100!');
    return;
  }
  var message;

  if (score < 50) {
    message = `Not pass!`;
  } else if (score <= 60) {
    message = 'Grade D';
  } else if (score <= 80) {
    message = 'Grade C';
  } else if (score <= 90) {
    message = 'Grade B';
  } else {

    switch(score) {
      case 99:
        message = 'Almost Perfect';
        break;
      case 100:
        message = 'Take a day off tomorrow!';
        break;
      default:
        message = 'A';
    }

  }

  return `${name}'s score test is ${score}. ${message}.`;
}






function saveMoneyCalculator(age, ageOfRetirement, monthlyIncome, savePercentage) {

  var yearsRemaining = ageOfRetirement - age;

  if (age >= ageOfRetirement) {
    return `You have already retired! What do you want here?`;
  }

  return monthlyIncome * (savePercentage / 100) * 12 * yearsRemaining;

}

var firstExample = saveMoneyCalculator(40, 65, 2000, 10);
console.log(firstExample);
var failedExample = saveMoneyCalculator(68, 62, 50000, 5);
console.log(failedExample);
