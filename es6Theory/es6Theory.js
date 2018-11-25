class Tiger {
  constructor(legs, eyes, eatMeat, residence, colorFur) {
    this.eyeColors = eyes;
    this.eatMeat = eatMeat;
    this.residence = residence;
    this.colorFur = colorFur;
  }
}
class BengalTiger extends Tiger{
  constructor(name, age) {
    super('brown', true, 'India', 'orange-black');
    this.name = name;
    this.age = age;
  }
}
class SiberianTiger extends Tiger {
  constructor(name, age) {
    super('blue', false, 'Siberia', 'white-black');
    this.name = name;
    this.age = age;
  }
}

let richardParker = new BengalTiger('Richard Parker', 12);
let joe = new SiberianTiger('Joe', 18);

let returnSum = (array) => {
  return array.reduce((a, b) => a + b, 0);
}

console.log(returnSum([0, 1, 2, 5, 7, 3])); // Returns 18 as a total Value of sum
