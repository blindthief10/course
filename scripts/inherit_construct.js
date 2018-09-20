let latin = {language: 'spanish', city: 'Hamburg'};

let LatinoGuys = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isStudent = true;
}

let jake = new LatinoGuys('Kostas', 'Diakogiannis', 30);
let daniel = new LatinoGuys('Daniel', 'Cipolla', 35);
let mauro = new LatinoGuys('Mauro', 'Cifuentes', 46);
let marcelo = new LatinoGuys('Marcelo', 'Ramirez', 37);

jake.favoriteCity = 'Zurich';

jake.isStudent = false;

jake.isStudent ? console.log('Welcome back to school bro.') : console.log('What are you doing here?');

Object.setPrototypeOf(daniel, latin);
Object.setPrototypeOf(mauro, latin);
Object.setPrototypeOf(marcelo, latin);

console.log(jake);
console.log(daniel);
console.log(mauro);
console.log(marcelo);
