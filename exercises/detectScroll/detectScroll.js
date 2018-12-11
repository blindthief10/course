let score = -1;
let colors = ['pink', 'cyan', 'purple', 'yellow', 'red', 'green', 'brown'];

console.log(score);

$(document).ready(ev => {

  window.addEventListener('wheel', ev => {
    ev.preventDefault();
    if (ev.wheelDelta < 0) { // The way the browser defines the scroll down event.
      if (score === colors.length - 1) {
        console.log(score);
        return;
      }
      score++;
      console.log(score);
      $('body').css('background', colors[score]);
    }else {
      if (score <= -1) {
        $('body').css('background', 'orange');
        console.log(score);
        return;
      }
      score--;
      console.log(score);
      $('body').css('background', colors[score]);
    }
  })

})
