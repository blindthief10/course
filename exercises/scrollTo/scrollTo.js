let links = document.querySelectorAll('a');
let movies = document.querySelectorAll('section');

let forrestGumpLink = links[3];

let runForrest = function(ev) {
  ev.preventDefault();
  let scrollDownToForrest = setInterval(function () {
    window.scrollBy(0, 4);
    if (window.pageYOffset >= 1184) {
      clearInterval(scrollDownToForrest);
    }
  }, 1)
}

forrestGumpLink.addEventListener('click', runForrest);
