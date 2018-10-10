let possibleDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let createRandomHex = function(pool) {
  let randomColor = '#';

  for (let i = 1; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * pool.length);
    randomColor += pool[randomIndex];
  }
  return randomColor;
}

document.body.style.background = createRandomHex(possibleDigits);
