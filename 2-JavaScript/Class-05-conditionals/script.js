// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

const userAge = 30;
const hasCNH = true;

if (userAge >= 18) {
  console.log("Maior de idade!");
} else {
  console.log("Menor de idade!");
}

if (userAge >= 18 && hasCNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

const average = 7;

if (average >= 7) {
  console.log("Aprovado");
} else if (average >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

const n1 = 7;
const n2 = 8;
const n3 = 9;
const averege = (n1 + n2 + n3) / 3;
console.log(averege);

if (averege >= 7) {
  console.log("Aprovado por média");
} else if (averege >= 3) {
  console.log("Em recuperação");
} else {
  console.log("Aluno Reprovado!");
}
