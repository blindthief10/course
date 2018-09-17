function add(a, b) {
  return a + b;
}

let multiply = function(a, b) {
  return a * b;
}





let num = 5;

let increment = function() {
  num++;
}

let example = function() {
  increment();
}

example();
example();


let subtract = function(a, b) {
  return add(a, b) / multiply(a, b);
}

























let sayHello = function(name) {
  return `Hello ${name}!`;
}


let printAge = function(age) {
  return `My age is ${age}`;
}


let showInfo = function(fun, param) {
  return fun(param);
}

console.log(showInfo(sayHello, 'Jake'));
console.log(showInfo(printAge, 50));



let addition = function(a, b) {
  return a + b;
}

let subtraction = function(a, b) {
  return a - b;
}

let multiplication = function(a, b) {
  return a * b;
}

let divide = function(a, b) {
  return a / b;
}

let modulo = function(a, b) { 
  return a % b;
}


let apocalypseNow = function(fn, firstArgument, secondArgument) {
  return fn(firstArgument, secondArgument);
}

console.log(apocalypseNow(divide, 10, 5));
console.log(apocalypseNow(multiplication, 10, 5));
console.log(apocalypseNow(subtraction, 25, 5));
console.log(apocalypseNow(addition, 25, 30));
console.log(apocalypseNow(modulo, 10, 100));
