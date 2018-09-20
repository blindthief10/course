let males = {
  gender: 'male',
  hobby: 'Reading'
}

jake = {
  firstName: 'Konstantinos',
  lastName: 'Diakogiannis',
  bankAccountInAmericanDollars: 1000,
  countryOfResidence: 'Greece',
  convertToLocal: 0.86
}

let gidday = {
  firstName: 'Meuron',
  lastName: 'Gday',
  bankAccountInAmericanDollars: 2000,
  countryOfResidence: 'Australia',
  convertToLocal: 1.38
}

let steffan = {
  firstName: 'Steffan',
  lastName: 'Effenberg',
  bankAccountInAmericanDollars: 5000,
  countryOfResidence: 'Switzerland',
  convertToLocal: 0.96
}

let convertToLocalCurrency = function(person) {
  person.bankAccountInLocalCurrency = person.bankAccountInAmericanDollars * person.convertToLocal;
}
