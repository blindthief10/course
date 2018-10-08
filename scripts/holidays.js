let sentence = 'I had a fuck, time in Bruges';

let badWords = ['fuck', 'shit', 'pussy', 'asshole'];

let checkBadLanguage = function(text, forbiddenWords) {
  text = text.replace(',', '!');
  let sentenceSplit = text.split(' ');
  console.log(sentenceSplit);
  for (let word of sentenceSplit) {
    if (forbiddenWords.includes(word)) {
      console.log('This message cannot be printed');
      return;
    }
  }
  console.log(text);
}

checkBadLanguage(sentence, badWords);


let quoteDatabase = [
   {author: 'Jesus Christ',  quote: 'Ask and you shall receive'},
   {author: 'Julius Caesar', quote: 'Veni, Vidi, Vici'},
   {author: 'Tony Montana', quote: 'Say hello to my little friend!'}
]

let selectQuote = function(quoteCollections) {
  let randomNumber = Math.floor(Math.random() * quoteCollections.length);
  console.log(`${quoteCollections[randomNumber].quote}, ${quoteCollections[randomNumber].author}`);
}

selectQuote(quoteDatabase);

// Fav colors exercise

let favColors = ['Green', 'Blue', 'Orange', 'Pink'];

console.log(`Some of my favorite colors: ${favColors.join(', ')}`);

// Favorite team exercise

let Fan = function(firstName, lastName, favTeam, city) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favTeam = favTeam;
  this.city = city;
}

let Jens = new Fan('Jens', 'Soltwedel', 'HSV', 'Lübeck');
let Meir = new Fan('Meir', 'Overferst', 'Maccabi Haifa', 'Tel-Aviv');
let Eugen = new Fan('Jewgeny', 'Kuhn', 'Spartak Moscow', 'Moscow');
let Jake = new Fan('Kostas', 'Diakogiannis', 'AEK Athens', 'Athens');
let Carmine = new Fan('Carmine', 'Tambascia', 'Napoli', 'Benevento');

let fans = [Jens, Meir, Eugen, Jake, Carmine];

let showFanCity = function(team, fansDatabase) {
  for (let fan of fansDatabase) {
    if (team === fan.favTeam) {
      console.log(fan.city);
    }
  }
}

showFanCity('HSV', fans);
showFanCity('Maccabi Haifa', fans);

// Return abbreviated strings
let quote = 'Greeks do not fight like heroes, heroes fight like Greeks';

let returnAbbr = function(text) {
  let allLetters = [];
  text = text.replace(',', '');
  let splitedText = text.split(' ');
  for (let word of splitedText) {
    let firstLetter = word[0].toUpperCase();
    allLetters.push(firstLetter);
  }

  console.log(`${allLetters.join('')}`);
}

returnAbbr(quote);
returnAbbr(quote);

// The reseller function

let sales = [
  'smartphone',
  'smartphone',
  'laptop',
  'smartphone',
  'laptop',
  'air_cooler',
  'smartphone',
  'smartphone',
  'laptop',
  'smartphone',
  'smart_watch'
];

let salesPerProduct = {};

let calculateSalesPerProduct = function(salesCollection) {
  for (let sale of salesCollection) {
    salesPerProduct.hasOwnProperty(sale) ? salesPerProduct[sale]++ : salesPerProduct[sale] = 1;
  }
  console.log(salesPerProduct);
}

calculateSalesPerProduct(sales);
