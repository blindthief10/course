let btn = document.querySelector('button');

btn.addEventListener('click', ev => {
  console.log(ev.type);
})

// Ecma Script 6

// Default values on function parameters
var name = 'jake';
// Function expression. Immediately invoked functions
let factorial = function(nameToChange) {
  name = nameToChange;

}

// function declarations
function whatever(whatever) {
  return whatever;
}

let squareRoot = (num = 9) => Math.sqrt(num)

let findMultiples = (first, second) => {
  let answer;
  first % second === 0 ? answer = true : answer = false
  return answer;
}

console.log(findMultiples(9, 3));
console.log(findMultiples(80, 2));
console.log(findMultiples(25, 3));

let telephoneData = [
  {countryCode: '0030', country: 'Greece'},
  {countryCode: '0039', country: 'Italy'},
  {countryCode: '00972', country: 'Israel'},
  {countryCode: '0007', country: 'Russia'},
  {countryCode: '0044', country: 'United Kingdom'},
  {countryCode: '0001', country: 'United States'},
  {countryCode: '00963', country: 'Syria'},
  {countryCode: '0029', country: 'Belgium'},
  {countryCode: '0031', country: 'Holland'},
  {countryCode: '0049', country: 'Germany'},
]
