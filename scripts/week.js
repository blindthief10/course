var hoursRemaining = 0;

function calculateUntilEndOfWeek(numDay) {

  const moneyPerHour = 10;

  switch(numDay) {
    case 1:
      hoursRemaining += 4;
      break;
    case 2:
      hoursRemaining += 6;
      break;
    case 3:
      hoursRemaining += 8;
      break;
    case 4:
      hoursRemaining += 10;
    case 6:
      hoursRemaining += 2;
      break;
    default:
      hoursRemaining += 0;
  }

  numDay++;

  if (numDay <= 7) {
    calculateUntilEndOfWeek(numDay);
  } else {
    console.log(`The money that you are going to earn until the end of the week is ${hoursRemaining * moneyPerHour}$`);
  }

}

calculateUntilEndOfWeek(5);
