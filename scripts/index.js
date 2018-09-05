var money = 500;
var cheapestRoom = 200;
var isVip = true;
var customersColor = 'blue';

// money -= 400;
var enoughMoney = money > cheapestRoom;

if (enoughMoney) {

  if (money >= cheapestRoom * 2) {
      if (isVip) {
        switch (customersColor){
          case 'red':
            console.log('take the red suite!');
            break;
          case 'blue':
            console.log('take the blue suite!');
            break;
          case 'green':
            console.log('take the green suite!');
            break;
          default:
            console.log('take the Gray suite!');
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
