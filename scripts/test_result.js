let testResults = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60, 45, 72];
testResults.push(66);
testResults.push(25);
console.log(testResults);
console.log(testResults.length);


let calculateFailurePercentage = function(collection, basis) {
  let failedCollection = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i] < basis) {
      failedCollection.push(collection[i]);
    }
  }

  let result = (failedCollection.length / collection.length) * 100;

  return `The percentage of failed students is ${result}% of total participants`;
}

console.log(calculateFailurePercentage(testResults, 50));

let favoriteAnimals = ['Pandas', 'Tigers', 'Elephants'];
let favoriteFoods = ['Gyros', 'Pastitsio', 'Souvlaki'];
let favoriteCities = ['Hamburg', 'Zurich', 'Athens', 'Damascus'];

let favoriteThings = favoriteAnimals.concat(favoriteFoods, favoriteCities);

if (favoriteCities.includes('Geneve')) {
  console.log('The man has class!');
} else {
  console.log('Raise your standards mate!');
}
