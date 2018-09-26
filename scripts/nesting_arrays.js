// let groceries = ['chocolate', 'bananas', 'rice', 'beers', 'deodorant'];
// let amount = [5, 5, 2, 6, 1];
// let allPairs = [];
//
// for (let i = 0; i < groceries.length; i++) {
//   let tempArr = [groceries[i], amount[i]];
//   allPairs.push(tempArr);
// }
//
// for (let pair of allPairs) {
//   console.log(`Buy ${pair[1]}x ${pair[0]}.`);
// }

let h3 = document.querySelector('h3');
let div = document.querySelector('div');
let visible = false;

h3.addEventListener('click', function(ev) {
  !visible ? div.style.display = 'block' : div.style.display = 'none';

  visible = !visible;

  ev.stopPropagation();

})

document.body.addEventListener('click', function(ev) {
  if(visible) {
    div.style.display = 'none';
  }

  visible = !visible;

})
