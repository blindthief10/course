let pills = document.querySelectorAll('li');
let movies = document.querySelectorAll('section');

let checkAndRemoveClass = function(collection, classToCheck) {
  for (let k = 0; k < collection.length; k++) {
    if (collection[k].classList.contains(classToCheck)) {
      collection[k].classList.remove(classToCheck);
      break;
    }
  }
}

for (let i = 0; i < pills.length; i++) {
  pills[i].addEventListener('click', function(ev) {
    checkAndRemoveClass(movies, 'active');
    checkAndRemoveClass(pills, 'selected');
    pills[i].classList.add('selected');
    movies[i].classList.add('active');
  })
}
