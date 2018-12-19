export const fizzBuzz = num => {

  if (typeof num !== 'number') {
    return 'The number you provided is not a number';
  } else if (num <= 0) {
    return 'The number you provided is either 0 or negative. You shall not pass!';
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }

}
