export const factorial = num => {
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
