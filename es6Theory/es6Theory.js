let btn = document.querySelector('button');

btn.addEventListener('click', ev => {
  console.log(ev.type);
})

// Ecma Script 6

// Default values on function parameters
let printName = function(name = 'jake') {
  console.log(name);
}

// printName('Mauro'); // Prints Mauro
// printName('Daniel'); // Prints Daniel
// printName(); // Prints jake

let printNameArrowStyle = name => {
  console.log(name);
}

let squareRoot = (num = 9) => Math.sqrt(num)

// console.log(squareRoot(15)); // Prints the square root of 15
// console.log(squareRoot());  // Prints the square root of 9

let findMultiples = (first, second) => {
  let answer;
  first % second === 0 ? answer = true : answer = false
  return answer;
}

// console.log(findMultiples(9, 3));
// console.log(findMultiples(80, 2));
// console.log(findMultiples(25, 3));

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

let returnCountryFromCode = code => {
  return telephoneData.find(item => item.country === code).countryCode;
}

// console.log(returnCountryFromCode('Holland'));
// console.log(returnCountryFromCode('Belgium'));
// console.log(returnCountryFromCode('Syria'));

let airlinePrices = [
  {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
  {airlinesName: 'Aegean', avgPriceTicket: 65.8},
  {airlinesName: 'KLM', avgPriceTicket: 102.82},
  {airlinesName: 'British Airways', avgPriceTicket: 114.9},
  {airlinesName: 'Iberia', avgPriceTicket: 77.2},
  {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
  {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
  {airlinesName: 'Air France', avgPriceTicket: 105.6},
  {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
  {airlinesName: 'Emirates', avgPriceTicket: 135.4},
]

let airFreightCompanies = [
  {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
  {airlinesName: 'Aegean', avgPriceTicket: 65.8},
  {airlinesName: 'KLM', avgPriceTicket: 102.82},
  {airlinesName: 'British Airways', avgPriceTicket: 114.9},
  {airlinesName: 'Iberia', avgPriceTicket: 77.2},
  {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
  {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
  {airlinesName: 'Air France', avgPriceTicket: 105.6},
  {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
  {airlinesName: 'Emirates', avgPriceTicket: 135.4},
]

let cheapAirlines = (threshold = 100) => {
  airFreightCompanies
  .filter(airFreight => airFreight.avgPriceTicket < threshold)
  .forEach(company => {
    console.log(company.airlinesName);
  })
}

cheapAirlines();

let names = [
  'Mauro',
  'Eugen',
  'Mauro',
  'Meir',
  'Eugen',
  'Jens',
  'Jens',
  'Jake',
  'Mohammed',
  'Mauro',
  'Mohammed',
  'Marcelo',
  'Sue',
  'Murhaf',
  'Jens'
];

let createUniqueNames = (collection = names) => {
  let uniqueNames = [];

  for (let name of collection) {
    if (!uniqueNames.includes(name)) {
      uniqueNames.push(name);
    }

  }

  return uniqueNames;
}

let uniqueNames = createUniqueNames();
console.log(uniqueNames);

let specialNames = new Set();

for (let name of names) {
  specialNames.add(name);
}

console.log(specialNames);
