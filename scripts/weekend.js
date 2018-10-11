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

// Last day of each month.

/*

To calculate what kind of day every month on a given year has, you need to grab
the last date of each month of the given year.
That is not so easy, since every month has different number of days.
Bear in mind though, that every month has a followed month that for sure has a First
day, and whose date you already know (it is the first date!!).
Maybe you can grab this day for every month of the year (repeated code here?) and set it's
date to it's previous day (by subtracting 1).
Once you have the date of the last day of the month, you can easily have it's day by using
the getDay function.

*/
