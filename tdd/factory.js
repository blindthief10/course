const calculateNumbers = (a, b) => {
  // If a or b is not a number then return an error message
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'The operation is not possible. Both arguments must be numbers!';
  }

  if (b < 0) {
    // if b is a negative number then return the product of two nums
    return a * b;
  }
  // Return the sum of two numbers
  return a + b;
}

const factorial = num => {
  if (num < 0 || typeof num !== 'number') {
    return 'You shall not pass! Factorial not possible!';
  }

  let result = 1;

  for (let i = num; i >= 1; i--) {
    result = result * i;
  }

  return result;
}

const fizzBuzz = num => {
  if (typeof num !== 'number' || num <= 0 || num > 100) {
    return 'You get nothing here!';
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

let Zodiac = function(sign, beginDate, endDate) {
  this.sign = sign;
  this.beginDate = beginDate;
  this.endDate = endDate;
}

const aries = new Zodiac('Aries', new Date(2020, 2, 21), new Date(2020, 3, 19));
const taurus = new Zodiac('Taurus', new Date(2020, 3, 20), new Date(2020, 4, 20));
const gemini = new Zodiac('Gemini', new Date(2020, 4, 21), new Date(2020, 5, 20));
const cancer = new Zodiac('Cancer', new Date(2020, 5, 21), new Date(2020, 6, 22));
const leo = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
const virgo = new Zodiac('Virgo', new Date(2020, 7, 23), new Date(2020, 8, 22));
const libra = new Zodiac('Libra', new Date(2020, 8, 23), new Date(2020, 9, 22));
const scorpio = new Zodiac('Scorpio', new Date(2020, 9, 23), new Date(2020, 10, 21));
const sagittarius = new Zodiac('Sagittarius', new Date(2020, 10, 22), new Date(2020, 11, 21));
const capricorn = new Zodiac('Capricorn', new Date(2020, 11, 22), new Date(2021, 0, 19));
const aquarius = new Zodiac('Aquarius', new Date(2020, 0, 20), new Date(2020, 1, 19));
const pisces = new Zodiac('Pisces', new Date(2020, 1, 20), new Date(2020, 2, 20));

const allZodiacs = [aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces];

const showZodiac = birthday => {
  birthday.getMonth() === 0 ? birthday.setYear(2021) : birthday.setYear(2020);
  for (let zodiac of allZodiacs) {
    if (birthday >= zodiac.beginDate && birthday <= zodiac.endDate) {
      return `Your zodiac is ${zodiac.sign}`;
    }
  }
}

module.exports = {calculateNumbers: calculateNumbers, factorial: factorial, fizzBuzz: fizzBuzz, showZodiac: showZodiac};
