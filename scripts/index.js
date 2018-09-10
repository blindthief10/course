// First exercise

var testedNum = 5;
var message = ``;

if (testedNum > 0) {
  message += `This is a positive number`;
} else if (testedNum < 0) {
  message += `This is a negative number`;
} else {
  message += `This is zero!`;
}

message += ' And i am very happy about it!';

console.log(message);

// Second exercise

var givenNumber = -5;

givenNumber !== 0 ? console.log(-1 * givenNumber) : console.log(0);

// Fourth exercise

var firstNum = 50,
    secondNum = 50,
    thirdNum = 35,
    biggestNum;

if (firstNum > secondNum && firstNum > thirdNum) {
  biggestNum = firstNum;
} else if (secondNum > firstNum && secondNum > thirdNum) {
  biggestNum = secondNum;
} else if (thirdNum > firstNum && thirdNum > secondNum){
  biggestNum = thirdNum;
} else {
  biggestNum = `Officially we have a tie!`;
}

console.log(biggestNum);

// Exercise leap year

var givenYear = 2008;
var leapYearMsg = `Yes! ${givenYear} is a leap year!`;
var noLeapHere = `Nope! ${givenYear} is not a leap year!`;

givenYear % 4 === 0 ? console.log(leapYearMsg) : console.log(noLeapHere);

// Months exercise

var numMonth = 6;

if (numMonth === 2) {
  console.log(`The february has 28 days you dumm!`);
} else if (numMonth === 4 || numMonth === 6 || numMonth === 9 || numMonth === 11) {
  console.log(`The month you entered contains 30 days`);
}else {
  console.log('The month you entered contains 31 days!');
}
