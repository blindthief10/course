import { addition } from './implementation.js';
import { fizzBuzz } from './fizzbuzz.js';
import { factorial } from './factorial.js';

const passedMessage = 'Your test passed';
const failedMessage = 'Your test failed';

const checkAddition = () => {
  const expectedResult = 25;
  const actualResult = addition(2, 23);

  if (expectedResult == actualResult) {
    console.log('Your test passed!');
  } else {
    console.log('Your test has failed! This is the checkAdditon function!');
  }
}

const additionGoneWrong = () => {
  const expectedResult = 'Sorry, the operation is not possible!';
  const actualResult = addition(false, '23');

  if (expectedResult == actualResult) {
    console.log('Your test passed!');
  } else {
    console.log('Your test has failed! This is the additionGoneWrong function');
  }
}

const returnPositiveProduct = () => {
  const expectedResult = 40;
  const actualResult = addition(-4, 10);

  if (expectedResult == actualResult) {
    console.log('Your test passed!');
  }else {
    console.log('Your test has failed! This is the returnPositiveProduct function');
  }
};

const fizzBuzzTypeCheck = (() => {
  const actualResult = fizzBuzz('clearly not a number, captain Obvious!');
  const expectedResult = 'The number you provided is not a number';

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})();

const fizzBuzzNegative = (() => {
  const actualResult = fizzBuzz(-5);
  const expectedResult = 'The number you provided is either 0 or negative. You shall not pass!';

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})();

const multipleOfBoth = (() => {
  const actualResult = fizzBuzz(15);
  const expectedResult = 'FizzBuzz';

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})();

const multipleOfThree = (() => {
  const actualResult = fizzBuzz(9);
  const expectedResult = 'Fizz';

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})();

const multipleOfFives = (() => {
  const actualResult = fizzBuzz(25);
  const expectedResult = 'Buzz';

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})();

const notAMultiple = (() => {
  const actualResult = fizzBuzz(7);
  const expectedResult = 7;

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})();

const notANumber = (() => {
  const actualResult = factorial('clearly not a number');
  const expectedResult = 'The input you entered is not a number! You get no factorial!';

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})()

const isNegative = (() => {
  const actualResult = factorial(-5);
  const expectedResult = 'Impossible to present factorial of a negative number';

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})()

const isZero = (() => {
  const actualResult = factorial(0);
  const expectedResult = 1;

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})()


const isPositive = (() => {
  const actualResult = factorial(4);
  const expectedResult = 24;

  expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
})()
