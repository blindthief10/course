let Movie = function(title, director, yearReleased, mainActor, seen) {
  this.title = title;
  this.director = director;
  this.yearReleased = yearReleased;
  this.mainActor = mainActor;
  this.seen = seen;
}

let prestige = new Movie('The Prestige', 'Chris Nolan', 2006, 'Christian Bale', true);
let sunshine = new Movie('The Eternal sunshine of a spottless mind', 'Terrence Malik', 2007, 'Jim Carrey', false);
let memento = new Movie('Memento', 'Chris Nolan', 2000, 'Guy Pearce', true);
let darkKnight = new Movie('The dark knight rises', 'Chris Nolan', 2012, 'Tom Hardy', true);
let psycho = new Movie('Psycho', 'Alfred Hitchkock', 1963, 'Anthony Perkins', true);

let allMovies = {
  prestige: prestige,
  sunshine: sunshine,
  memento: memento,
  darkKnight: darkKnight,
  psycho: psycho,
  printSeenMovies: function() {

    for (let movie in this) {
      for (let info in this[movie]) {
        console.log(this[movie][info]);
      }
    }

  }

}

allMovies.printSeenMovies();
