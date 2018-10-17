let button = document.querySelector('button');
let headings = document.querySelectorAll('h3');
let counter = 0;

let removeHeadings = function() {
  headings[counter].style.background = 'deepskyblue';
  counter++;
  button.innerHTML = 'Make also the other heading blue';

  if (counter === headings.length) {
    button.innerHTML = 'Hey! I am blue dababaddiidaba'; 
    button.removeEventListener('click', removeHeadings);
  }
}

button.addEventListener('click', removeHeadings);
