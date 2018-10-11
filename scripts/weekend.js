let checkWeekend = function(date) {
  if (date.getDay() === 0 || date.getDay() === 6) {
    console.log('It is a weekend!');
  } else {
    console.log('It is a weiterbildung date!!!');
  }
}

let today = new Date();
let twoDaysAfter = new Date(2018, 9, 13);
let threeDaysAfter = new Date('Oct 15 2018');

checkWeekend(today);
checkWeekend(twoDaysAfter);
checkWeekend(threeDaysAfter);


// Create the remaining days functions

let howManyDaysRemain = function(datum) {
  let currentDateMonth = datum.getMonth();

  let remainingDays = -1;

  while (currentDateMonth === datum.getMonth()) {
    datum.setDate(datum.getDate() + 1);
    remainingDays++;
  }

  return remainingDays;
}

let currentDate = new Date();
let februaryDate = new Date('Feb 23 2020');

console.log(howManyDaysRemain(currentDate));
console.log(howManyDaysRemain(februaryDate));
