let sentence = 'I am a web developer';
let counter = 0;
let sentenceSplitted = sentence.split('');

$(document).ready(ev => {

  let createLetters = setInterval(() => {

    if (counter === sentenceSplitted.length) {
      return;
    }

    let newSpan = document.createElement('span');
    if (sentenceSplitted[counter] === ' ') {
      newSpan.innerHTML = '&nbsp;';
    } else {
      newSpan.innerHTML = sentenceSplitted[counter];
    }

    $('section').append(newSpan);
    counter++;
  }, 100)

})
