(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const operation = (a, b) => {

  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Sorry, the operation is not possible!';
  } else if (a < 0) {
    return Math.abs(a) * b;
  }

  return a + b;
}

const fizzBuzz = num => {

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

const factorial = num => {
  let result = 1;
  if (typeof num !== 'number') {
    return 'The input you entered is not a number! You get no factorial!';
  } else if (num < 0) {
    return 'Impossible to present factorial of a negative number';
  } else if (num === 0) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = {operation: operation, fizzBuzz: fizzBuzz, factorial: factorial};

},{}]},{},[1]);
