let links = document.querySelectorAll('a');
let movies = document.querySelectorAll('section');

let scrollDown = function(ev, iterator) {
  ev.preventDefault();

  let makeScroll = function(limit, fn) {
    window.scrollBy(0, 4);
    if (window.pageYOffset >= limit) {
      clearInterval(fn);
    }
  }

  if (iterator === movies.length - 1) {
    let scrollDownToSection = setInterval(function() {
      makeScroll(1308, scrollDownToSection);
    }, 1);
  } else {
    let scrollDownToSection = setInterval(function() {
      makeScroll(movies[iterator].offsetTop, scrollDownToSection);
    }, 1);
  }
}

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(ev) {
    scrollDown(ev, i);
  });
}
