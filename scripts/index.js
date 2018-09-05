var money = 500;
var cheapestRoom = 200;
var isVip = true;
var customersColor = 'orange';

// money -= 400;
var enoughMoney = money > cheapestRoom;

if (enoughMoney) {

  if (money >= cheapestRoom * 2) {
      if (isVip) {
        if (customersColor === 'red') {
          console.log('Take the red suite');
        } else if (customersColor === 'blue') {
          console.log('Take the blue suite');
        } else if (customersColor === 'green') {
          console.log('Take the green');
        } else {
          console.log('Take the grey');
        }
      } else {
        console.log('Get the bigger room!');
      }
  }else {
    console.log('Get the cheapest room!');
  }

} else {
  console.log('Get another place!');
}
