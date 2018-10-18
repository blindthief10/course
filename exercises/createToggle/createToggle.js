let button = document.querySelector('button');
let list = document.querySelector('ul');
let paragraph = document.querySelector('p');
let secondButton = document.querySelector('button:nth-of-type(2)');
let paragraphHeightFullScreen = paragraph.clientHeight;

let listVisible = false;
let paragraphIsShown = true;

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

secondButton.addEventListener('click', function() {
  if (paragraphIsShown) {
    paragraph.style.height = '0';
    paragraph.style.padding = '0';
    secondButton.innerHTML = 'Show Paragraph';
  } else {
    paragraph.style.padding = '1vw 4vw';
    paragraph.style.height = paragraphHeightFullScreen + 'px';
    secondButton.innerHTML = 'Hide Paragraph';
  }
  paragraphIsShown = !paragraphIsShown;
})
