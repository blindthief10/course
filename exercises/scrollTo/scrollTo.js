let titles = document.querySelectorAll('nav > li');
let lists = document.querySelectorAll('ul');
let movies = document.querySelectorAll('section');

let moviesOffset = [];
let movieTitles = [];

 for (let i = 0; i < movies.length; i++) {
  moviesOffset.push(movies[i].offsetTop);
  movieTitles.push(titles[i].innerText);
}

let checkAndRemoveClass = function(listOfElements, classToCheck) {
  for (let j = 0; j < listOfElements.length; j++) {
    if (listOfElements[j].classList.contains(classToCheck)) {
      listOfElements[j].classList.remove(classToCheck);
      return;
    }
  }
}

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function(ev) {
    ev.stopPropagation();
    checkAndRemoveClass(lists, 'active');
    lists[i].classList.add('active');
  })
}


document.body.addEventListener('click',  function() {
  checkAndRemoveClass(lists, 'active');
});

window.addEventListener('scroll', function(ev) {
  for (let k = 0; k < moviesOffset.length; k++) {
    if (window.pageYOffset >= moviesOffset[k] && window.pageYOffset < moviesOffset[k + 1]) {
      console.log(`You are watching ${movieTitles[k]}!`);
    }
  }
})
