var name = 'Kostas';
var age = 30;
var profession = 'Machine learning engineer';
var live = 'Hamburg';

// String concatenation
console.log('My name is ' + name + '. I am ' + age + ' years old. I work as a ' + profession + ' and i live in ' + live + '.');
// String interpolation
console.log(`My name is ${name}. I am ${age} years old. I work as a ${profession} and i live in ${live}.`);

var cashier = 300;
var smartphone = 200;
var laptop = 500;
var battery = 30;

var meirsPurchase = battery * 2;
console.log(meirsPurchase);

// cashier = cashier + meirsPurchase;
cashier += meirsPurchase;

var noursPurchase = smartphone;

cashier += noursPurchase;

cashier += laptop * 2;

var meirsBrokenBattery = -50;

cashier += meirsBrokenBattery;

console.log(cashier);
