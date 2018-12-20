const implementation = require('./implementation.js');

// console.log(implementation.fizzBuzz);

const allGoodOperation = (() => {
  const actualResult = implementation.operation(10, 14);
  const expectedResult = 24;

  actualResult === expectedResult ? console.log('It passed') : console.log('It failed')
})()
