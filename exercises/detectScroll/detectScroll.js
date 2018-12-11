let score = -1;
let colors = ['pink', 'cyan', 'purple', 'yellow', 'red', 'green', 'brown'];

$(document).ready(ev => {

  window.addEventListener('wheel', ev => {
    ev.preventDefault();
    if (ev.wheelDelta < 0) { // The way the browser defines the scroll down event.
      if (score === colors.length - 1) {
        return;
      }
      score++;
      $('body').css('background', colors[score]);
    }else {
      if (score === 0) {
        score--;
        $('body').css('background', 'orange');
        return;
      } else if (score < 0) {
        return;
      }
      score--;
      $('body').css('background', colors[score]);
    }
  })

})
