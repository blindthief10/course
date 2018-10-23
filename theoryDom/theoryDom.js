let button = document.querySelector('button');
let paragraph = document.querySelector('p');

button.addEventListener('click', function(ev) {
  ev.stopPropagation();
  paragraph.classList.toggle('invisible');
  console.log('The button is clicked');
})

document.body.addEventListener('click', function() {
  document.body.style.background = 'deepskyblue';
  console.log('The body is clicked');
})
