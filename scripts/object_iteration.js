let payPerMonth = {
  july: 1000,
  august: 2000,
  september: 5000
}

let calculateAverage = function(obj) {
  let sum = 0;
  let count = 0;
  for (let props in obj) {
    sum += obj[props];
    count++;
  }
  obj.average = sum / count;
}
calculateAverage(payPerMonth);


let marcelosSkills = {
  html: 92,
  css: 88,
  js: 67
}

let jakeSkills = {
  html: 65,
  css: 52,
  js: 85,
  nodeJS: 100
}

let calculateWebSkills = function(obj) {
  let sum = 0;
  let counter = 0;
  for (let skill in obj) {
    sum += obj[skill];
    counter++;
  }
  obj.skillAvg = sum / counter;
}

calculateWebSkills(marcelosSkills);
calculateWebSkills(jakeSkills);
