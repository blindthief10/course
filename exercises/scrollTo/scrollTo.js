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

  let scrollDownToSection = setInterval(function() {
    if (iterator === movies.length - 1)  {
    makeScroll(1308, scrollDownToSection);
  } else {
    makeScroll(movies[iterator].offsetTop, scrollDownToSection);
    }
  }, 1)

}

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(ev) {
    scrollDown(ev, i);
  });
}
