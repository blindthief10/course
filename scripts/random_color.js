 let changeBgColor = function() {
   let amountOfRed = Math.floor(Math.random()*256);
   let amountOfGreen = Math.floor(Math.random()*256);
   let amountOfBlue = Math.floor(Math.random()*256);
   let colorsTogether = [amountOfRed, amountOfGreen, amountOfBlue];
   document.body.style.background = `rgb(${colorsTogether.join(', ')})`;
 }

 changeBgColor();
