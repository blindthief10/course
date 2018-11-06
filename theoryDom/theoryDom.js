let input = document.querySelector('input');
let button = document.querySelector('button');
let article = document.querySelector('article');
let checkbox = document.querySelector('input[type="checkbox"]');
let paragraphs = document.querySelectorAll('p');
let image = document.querySelector('img');
let selectFields = document.querySelectorAll('select');
let link = document.querySelector('a');
let textarea = document.querySelector('textarea');

input.addEventListener('keyup', function(ev) {
  let val = input.value;
  val ? article.innerText = val : article.innerText = input.placeholder
})

checkbox.addEventListener('click', function(ev) {
  checkbox.checked ? input.type = 'password' : input.type = 'text'
  console.log(input.value);
})

selectFields[0].addEventListener('change', function(ev) {
  let selectedValue = selectFields[0].value;
  image.src = `${selectedValue}.jpg`;
})


selectFields[1].addEventListener('change', function(ev) {
  link.innerHTML = `Go to <span>${ev.currentTarget.value}</span>`;
  link.href =  `https://www.${ev.currentTarget.value}.com`;
})



button.addEventListener('click', function(ev) {
  let text = textarea.value;
  let newParagraph = document.createElement('P');
  newParagraph.innerText = text;
  document.body.appendChild(newParagraph);
  textarea.value = '';
})
