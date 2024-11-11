//map (imutable)👏
const numbers = [10, 20, 30];
console.log(numbers.map((num) => num + 5));
console.log(numbers.map((num) => num * 5.74));

const devs = [
  { name: "Nereu", salary: 6500 },
  { name: "Fred", salary: 5800 },
  { name: "Nereu", salary: 7000 },
  { name: "Lucas", salary: 5000 },
];

console.log(
  devs.map((devs) => {
    return devs;
  })
);
const newSalaries = devs.map((dev) => dev.salary * 1.1);
console.log(newSalaries);

console.log(devs);

const devFiltered = devs.filter((dev) => dev.salary > 6000);
console.log(devFiltered);

const resp = prompt("Digite o nome: ").toLocaleLowerCase();
const resultFilter = devs.filter((dev) =>
  dev.name.toLocaleLowerCase().includes(resp)
);
console.log(resultFilter);

//sort: deixar o número em ordem crescente

const numbers2 = [
  33,
  1,
  3,
  "Zebra",
  "a",
  "A",
  6,
  2,
  11,
  "Emanuel",
  "emanuel",
  "Antônio",
];
console.log(numbers2);
numbers2.sort();
numbers2.sort((a, b) => a - b);
if (typeof a == "string" && typeof b == "string") {
  a = String(a).toLocaleLowerCase();
  b = String(b).toLocaleLowerCase();
}

numbers2.sort((a, b) => {
  a = String(a).toLocaleLowerCase();
  b = String(b).toLocaleLowerCase();
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(numbers2);

//reduce: resolver coisas complexas de forma mais simples
const expenses = [20, 32, 38, 220, 50, 100];
const total = expenses.reduce((a, b) => a + b, 1000);
console.log(total);
 