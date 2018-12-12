let removeAndFadeOut = (firstSelector, secondSelector, classToBeRemoved) => {
  $(firstSelector).children(secondSelector).fadeOut();
  $(firstSelector).removeClass(classToBeRemoved);
}

$(document).ready(ev => {
  $('nav > li').click(function(ev) {
    ev.stopPropagation();
    if (ev.target.classList.contains('active')) {
      removeAndFadeOut(this, 'ul', 'active');
      return;
    }
    removeAndFadeOut('li.active', 'ul', 'active');
    $(this).children('ul').fadeIn();
    $(this).addClass('active');
  })
  $('body').click(ev => {
    removeAndFadeOut('li.active', 'ul', 'active');
  })
