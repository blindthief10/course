const fishStock = [];
const customersOrder = [];

//info about every fish species and corresponding values
const fishInfo = [{species: 'tuna', price: 10}, {species: 'salmon', price: 50}, {species: 'koi', price: 100}];

//populate fishStock with a specific number of fishes!
const populateStock = (numOfRandomFishes) => {

  for (let i = 1; i <= numOfRandomFishes; i++) {
    let pickRandomSpecies = fishInfo[Math.round(Math.random() * 2)];
    fishStock.push(pickRandomSpecies.species);
  }

}

//Let's put 100 fishes inside!
populateStock(100);

const addFish = type => {

  if (!fishStock.includes(type)) {
    // Fish was not found!
    console.log('The type of fish you requested does not exist! Please select another fish!');
    return false;
  } else {
    //Check if there is already a fish like that in the order, then group them together!
    const findCurrentSpecies = customersOrder.find(fish => fish.species === type);

    if (findCurrentSpecies) {
      // If it does, just increment the quantity of the ordered fish!
      findCurrentSpecies.quantity++;
    } else {
      // If not just put a new fish order to the order array!
      const fishPrice = fishInfo.find(fish => fish.species === type).price;
      customersOrder.push({species: type, quantity: 1, price: fishPrice});
    }

    //In any case you will have to remove the fish from the stock!
    fishStock.splice(fishStock.indexOf(type), 1);
  }
}

addFish('salmon');
addFish('salmon');
addFish('tuna');
addFish('tuna');
addFish('tuna');
addFish('salmon');
addFish('salmon');
addFish('koi');

// See the order!
console.log(customersOrder);
console.log(fishStock.length);

//Calculate the total cost!

const calculateOrdersCost = order => {
  return order.reduce((a, b) => a + b.quantity * b.price, 0);
}

// print total cost
console.log(calculateOrdersCost(customersOrder));
