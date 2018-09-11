var affordableWeight = 10000;
var currentsContainerWeight = 10;
var totalContainers = 500;
var totalWeight = 0;
var containerNum = 1;

while (totalWeight + currentsContainerWeight <= affordableWeight) {

  if (containerNum <= 100) {
    totalWeight += 10;
  } else if (containerNum <= 200) {
    totalWeight += 20;
    currentsContainerWeight = 20;
  } else if (containerNum <= 250) {
    totalWeight += 50;
    currentsContainerWeight = 50;
  } else if (containerNum <= 300) {
    totalWeight += 100;
    currentsContainerWeight = 100;
  } else if (containerNum <= 400) {
    totalWeight += 200;
    currentsContainerWeight = 200;
  }else {
    totalWeight += 500;
    currentsContainerWeight = 500;
  }

  if (totalWeight + currentsContainerWeight <= affordableWeight) {
    containerNum++;
  } else {
    break;
  }
}

var message = `The last container imported is with the number ${containerNum}
and the free space is ${affordableWeight - totalWeight}. There are ${totalContainers - containerNum}
containers that were left out!`;

console.log(message);
