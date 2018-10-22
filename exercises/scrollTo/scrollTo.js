let links = document.querySelectorAll('a');
let movies = document.querySelectorAll('section');

let scrollDown = function(pos, fn) {
  if (window.pageYOffset >= pos) {
    clearInterval(fn);
  }
  window.scrollBy(0, 5);
}


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(ev) {
    ev.preventDefault();

    if (i === movies.length - 1) {
      let interval = setInterval(function() {
          scrollDown(movies[i].offsetTop - 175, interval);
      }, 1)
    }else {
        let interval =setInterval(function() {
          scrollDown(movies[i].offsetTop, interval);
        }, 1)
    }


  })
}
