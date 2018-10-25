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

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function(ev) {
    ev.stopPropagation();
    for (let j = 0; j < lists.length; j++) {
      if (lists[j].classList.contains('active')) {
        lists[j].classList.remove('active');
        break;
      }
    }
    lists[i].classList.add('active');
  })
}

document.body.addEventListener('click', function() {
  checkAndRemoveClass(lists, 'active');
})

document.body.addEventListener('mousemove', function what(ev) {
  if (ev.clientY === 0) {
    console.log('Leeeavvve');
    ev.currentTarget.removeEventListener('mousemove', what);
  }
})
