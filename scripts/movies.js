let Movie = function(title, director, yearReleased, mainActor, seen) {
  this.title = title;
  this.director = director;
  this.yearReleased = yearReleased;
  this.mainActor = mainActor;
  this.seen = seen;
}

let prestige = new Movie('The Prestige', 'Chris Nolan', 2006, 'Christian Bale', true);
let sunshine = new Movie('The Eternal sunshine of a spotles mind', 'Terrence Malik', 2007, 'Jim Carrey', false);
let memento = new Movie('Memento', 'Chris Nolan', 2000, 'Guy Pearce', true);
let darkKnight = new Movie('The dark knight rises', 'Chris Nolan', 2012, 'Tom Hardy', false);
let psycho = new Movie('Psycho', 'Alfred Hitchkock', 1963, 'Anthony Perkins', true);

let allMovies = {
  prestige: prestige,
  sunshine: sunshine,
  memento: memento,
  darkKnight: darkKnight,
  psycho: psycho
}

for (let movie in allMovies) {
  if (allMovies[movie].seen) {
    console.log(allMovies[movie].title);
  }
}
