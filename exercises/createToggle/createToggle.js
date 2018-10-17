let button = document.querySelector('button');
let list = document.querySelector('ul');
let items = document.querySelectorAll('ul li');
list.style.width = '25.1vw';

let listVisible = false;

button.addEventListener('click', function() {
  if (listVisible) {
    list.style.opacity = '0';
    button.innerHTML = 'Show favorite destinations';
  } else {
    list.style.opacity = '1';
    button.innerHTML = 'Get them out of here!';
  }
  listVisible = !listVisible;
})
