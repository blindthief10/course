let button = document.querySelector('button');
let headings = document.querySelectorAll('h3');
let counter = 0;

let removeHeadings = function() {
  headings[counter].style.background = 'deepskyblue';
  counter++;

  if (counter === headings.length) {
    button.removeEventListener('click', removeHeadings);
  }
}

button.addEventListener('click', removeHeadings);
