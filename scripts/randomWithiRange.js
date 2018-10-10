let beginDate = Date.now();

let createNumWithinRange = function(lowNumber, highNumber) {
  let range = Math.abs(lowNumber - highNumber) + 1;
  let randomNumber = Math.floor(Math.random() * range + lowNumber);
}

for (let i = 0; i <= 10000; i++) {
createNumWithinRange(50, 55);
}

let endDate = Date.now();
console.log(`This script took ${endDate - beginDate} ms to execute`);
