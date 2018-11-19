let textarea = document.querySelector('textarea');
let fb = document.querySelector('.fb');
let tw = document.querySelector('.tw');

let facebookRegex = /\bf(ace)?b(ook)?\b/ig;
let twitterRegex = /\btw(itter)?\b/ig;

textarea.addEventListener('keyup', function(ev) {
  let text = textarea.value;
  let fbMatches = facebookRegex.test(text);
  let twMatches = twitterRegex.test(text);

  if (fbMatches) {
    fb.innerText = `Shares: ${text.match(facebookRegex).length}!`;
    fb.style.display = 'inline-block';
  } else {
    fb.style.display = 'none';
  }

  if (twMatches) {
    tw.innerText = `Shares: ${text.match(twitterRegex).length}!`;
    tw.style.display = 'inline-block';
  } else {
    tw.style.display = 'none';
  }
})
