console.log();

let concept = "prototypes (chain)";

let myName = "João Vitor";

console.log(myName.__proto__);
console.log(myName.toLocaleLowerCase());
console.log(myName.slice(2));
console.log(myName.slice(-3));
console.log(myName.slice(2, -3));

// quantidade de caracteres
console.log(concept.length);
console.log(concept.indexOf("o", 5));

// numbers
let num1 = 123456789;
let num2 = 5.40954;

console.log(String(num1).length);
console.log(num2);
console.log(num2.toFixed(2));

// biblioteca Math
console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));

console.log(Math.abs(num2));
console.log(Math.trunc(num2));
console.log(Math.round(5.5));
console.log(Math.ceil(5.001));
console.log(Math.floor(5.999));

console.log(Math.random());
console.log(Math.ceil(Math.random() * 100)); //sortear do 1 até o 100

const times = [
  "Corinthians",
  "Flamengo",
  "Vasco",
  "Fortaleza",
  "Ceará",
  "São Paulo",
];
const randomNumber = Math.ceil(Math.floor() * times.length);
console.log(times[randomNumber]);
