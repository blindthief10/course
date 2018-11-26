let currentRuler = 'Cersei Lannister';

let changeRulerTo = (firstRuler, secondRuler, thirdRuler, fourthRuler, finalRuler) => {
  setTimeout(() => {
    currentRuler = firstRuler;
    console.log(currentRuler);
    setTimeout(() => {
      currentRuler = secondRuler;
      console.log(currentRuler);
      setTimeout(() => {
        currentRuler = thirdRuler;
        console.log(currentRuler);
        setTimeout(() => {
          currentRuler = fourthRuler;
          console.log(currentRuler);
          setTimeout(() => {
            currentRuler = finalRuler;
            console.log(currentRuler);
          }, 1000)
        }, 1500)
      }, 2000)
    }, 3000)
  }, 5000)
}

console.log(currentRuler);
changeRulerTo('Danny', 'Jon Snow', 'Euron Greyjoy', 'Jamie Lannister', 'NightKing');
console.log(currentRuler);

let executedFunction = () => {
  console.log('executed!')
}

setTimeout(executedFunction, 7000);
