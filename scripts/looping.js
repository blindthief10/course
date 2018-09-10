var maxWeight = 10000;
var numOfContainers = 500;
var weightIncluded = 0;
var id = 1;
var weightNextContainer = 10;

while(maxWeight >= weightIncluded + weightNextContainer) {

  if (id <= 100) {
    weightIncluded += 10;
    weightNextContainer = 10;
  } else if (id <= 200) {
    weightIncluded += 20;
    weightNextContainer = 20;
  } else if (id <= 250)  {
    weightIncluded += 50;
    weightNextContainer = 50;
  } else if (id <= 300){
    weightIncluded += 100;
    weightNextContainer = 100;
  } else if (id <= 400) {
    weightIncluded += 200;
    weightNextContainer = 200;
  } else {
    weightIncluded += 500;
    weightNextContainer = 500;
  }

  id++;

}

console.log(`I have included ${id - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`);
