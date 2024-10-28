function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(255, 376));
console.log(addNumbers(23, 56));
console.log(addNumbers(98124, 9315876));

function calcAvg(n1, n2) {
  const avg = (n1 + n2) / 2;
  return avg;
}

console.log(calcAvg(7, 8));
console.log(calcAvg(10, 10));
console.log(calcAvg(4, 5));
console.log(calcAvg(2, 8));
console.log(calcAvg(7, 9));

const myName = prompt("Digite seu nome:"); // input
const grade1 = Number(prompt("Nota1:"));
const grade2 = Number(prompt("Nota2:"));
const studentAvg = calcAvg(grade1, grade2);
const sumGrades = addNumbers(grade1, grade2);

alert(
  `Oi, ${myName}, seja bem-vindo ! A soma das notas é ${sumGrades} Sua média é ${studentAvg}`
); // output
