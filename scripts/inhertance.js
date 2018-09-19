let latinMenInHamburg = {
  nativeTongue: 'spanish',
  city: 'Hamburg',
  gender: 'male',
  showCity: function() {
    console.log(`${this.firstName} ${this.lastName} lives in ${this.city}`);
  }
}

let mauro = {
  firstName: 'Mauro',
  lastName: 'Cifuentes Navarro',
  nationality: 'Chilean'
}

daniel = {
  inheritedProperties: Object.create(latinMenInHamburg),
  firstName: 'Daniel',
  lastName: 'Cipolla',
  nationality: 'Ecuadorian',
  city: 'Quito'
}

marcelo = {
  inheritedProperties: Object.create(latinMenInHamburg),
  firstName: 'Marcelo',
  lastName: 'Ramirez',
  nationality: 'Paraguayan'
}

console.log(mauro);
console.log(daniel);
console.log(marcelo);
