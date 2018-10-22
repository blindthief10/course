let button = document.querySelector('button');
let paragraph = document.querySelector('p');

button.addEventListener('click', function() {
  paragraph.classList.toggle('invisible');
})
