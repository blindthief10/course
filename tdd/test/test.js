const factory = require('../factory.js');
const assert = require('assert');


describe('Testing whole functionality, test suite!', () => {

  describe('Testing the calculateNumbers function', () => {

    it('Should return the sum of the arguments', () => {
      const actualResult = factory.calculateNumbers(10, 15);
      const expectedResult = 25;

      assert.equal(actualResult, expectedResult);
    })

    it('Should return the product if b is negative', () => {
      const actualResult = factory.calculateNumbers(10, -4);
      const expectedResult = -40;

      assert.equal(actualResult, expectedResult);
    })

    it('should return an error string message if typeof an argument is not a number', () => {
      const actualResult = factory.calculateNumbers('jake', 5);
      const expectedResult = 'The operation is not possible. Both arguments must be numbers!';

      assert.equal(actualResult, expectedResult);
    })

  })

  describe('the factorial function', () => {

    it('Should return the factorial number', () => {
      const actualResult = factory.factorial(5);
      const expectedResult = 120;

      assert.equal(actualResult, expectedResult);
    })

    it('Should return an error message for a negative number or not a number', () => {
      const actualResult = factory.factorial(-2);
      const expectedResult = 'You shall not pass! Factorial not possible!';

      assert.equal(actualResult, expectedResult);
    })

  })

  describe('The fizzbuzz function', () => {

    const arguments = [-2, 45, 9, 25, 38];
    const correspondingResults = ['You get nothing here!', 'FizzBuzz', 'Fizz', 'Buzz', 38];

    arguments.forEach((argument, index) => {
      it(`Should return ${correspondingResults[index]}`, () => {
        const actualResult = factory.fizzBuzz(argument);
        const expectedResult = correspondingResults[index];
        assert.equal(actualResult, expectedResult);
      })
    })

  })

})
