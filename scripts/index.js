// first exercise

var testedNum = 5;

if (testedNum > 0) {
  console.log('It is a positive number!');
} else if (testedNum < 0) {
  console.log('It is a negative number');
} else {
  console.log('It is exactly 0!');
}

// second exercise

var secondNumber = 2;

if (secondNumber !== 0) {
  console.log(- secondNumber);
} else {
  console.log(secondNumber);
}

// Third exercise
var math = 12;
var literature = 14;
var programming = 9;
var historie = 14;
var geography = 19;

var summary = math + literature + programming + historie + geography;
var average = summary / 5;

console.log(summary);
console.log(average);

// Print the bigger number of three

var testNum = 22;
var testNumSecond = 35;
var testNumThird = 19;

if (testNum > testNumSecond && testNum > testNumThird) {
  console.log(`The biggest number of three is ${testNum}`);
} else if (testNumSecond > testNum && testNumSecond > testNumThird) {
  console.log(`The biggest number of three is ${testNumSecond}`);
} else if (testNumThird > testNum && testNumThird > testNumSecond) {
  console.log( `The biggest number of three is ${testNumThird}`);
} else {
  console.log(`There is no specific number that is bigger! We have a tie!`);
}

//  Months exercise

var monthNumber = 11;
var februaryMsg = 'February has always 28 days you dumm!';
var thirties = 'The month you selected contains 30 days!';
var thirtyOnes = 'The month you selected contains 31 days!'

if (monthNumber < 1 && monthNumber > 12) {
  console.log('Month should be represented as integer between 1 and 12');
} else if (monthNumber <= 7) {

    if (monthNumber % 2 === 0) {

        if (monthNumber === 2) {
          console.log(februaryMsg);
        } else {
          console.log(thirties);
        }

    } else {
        console.log(thirtyOnes);
    }

} else {

    if (monthNumber % 2 === 0) {
      console.log(thirtyOnes)
    } else {
      console.log(thirties);
    }
}

//  Leap year exercise

var year = 2000;
var leapYearMsg = `Yep! ${year} is a leap year!`;
var noLeapYearMsg = `Nope! ${year} is no leap year!`;

year % 4 === 0 ? console.log(leapYearMsg) : console.log(noLeapYearMsg);

// Addition without loop exercise

var startNum = 1;
var endNum = 100;

var sumCalculation = (startNum + endNum) * endNum / 2;
console.log(sumCalculation);
