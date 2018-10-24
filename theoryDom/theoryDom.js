let input = document.querySelector('input');
let btn = document.querySelector('button');
let paragraph = document.querySelector('p');
let checkbox = document.querySelector('input[type="checkbox"]');

input.addEventListener('keyup', function(ev) {
  let val = input.value;
  val ? paragraph.innerHTML = val : paragraph.innerHTML = input.placeholder
})

checkbox.addEventListener('click', function(ev) {
  checkbox.checked ? input.type = 'password' : input.type = 'text'
})
