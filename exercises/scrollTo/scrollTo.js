let titles = document.querySelectorAll('nav > li');
let lists = document.querySelectorAll('ul');

let checkAndRemoveClass = function(listOfElements, classToCheck) {
  for (let j = 0; j < listOfElements.length; j++) {
    if (listOfElements[j].classList.contains(classToCheck)) {
      listOfElements[j].classList.remove(classToCheck);
      return;
    }
  }
}

for (let i = 0; i < headings.length; i++) {
  headings[i].addEventListener('click', function(ev) {
    ev.stopPropagation();
    for (let j = 0; j < paragraphs.length; j++) {
      if (paragraphs[j].classList.contains('active')) {
        paragraphs[j].classList.remove('active');
        break;
      }
    }
    paragraphs[i].classList.add('active');
  })
}

document.body.addEventListener('click', function() {
  checkAndRemoveClass(lists, 'active');
})
