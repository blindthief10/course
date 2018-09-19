let males = {
  gender: 'male',
  hobby: 'Reading'
}

let jake = Object.create(males);
let gidday = Object.create(males);
let steffan = Object.create(males);

console.log(jake.hobby);

// jake = {
//   firstName: 'Konstantinos',
//   lastName: 'Diakogiannis',
//   bankAccountInAmericanDollars: 1000,
//   countryOfResidence: 'Greece',
//   convertToLocal: 0.86
// }

// let gidday = {
//   firstName: 'Meuron',
//   lastName: 'Gday',
//   bankAccountInAmericanDollars: 2000,
//   countryOfResidence: 'Australia',
//   convertToLocal: 1.38
// }

// let steffan = {
//   firstName: 'Steffan',
//   lastName: 'Effenberg',
//   bankAccountInAmericanDollars: 5000,
//   countryOfResidence: 'Switzerland',
//   convertToLocal: 0.96
// }

let convertToLocalCurrency = function(person) {
  person.bankAccountInLocalCurrency = person.bankAccountInAmericanDollars * person.convertToLocal;
}

// convertToLocalCurrency(jake);
// convertToLocalCurrency(gidday);
// convertToLocalCurrency(steffan);
//
// console.log(jake);
// console.log(gidday);
// console.log(steffan);
