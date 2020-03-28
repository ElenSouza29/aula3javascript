let valor1 = 1;
let valor2 = 2;

// console.log(valor1 == valor2)

let valor3 = 1;
let valor4 = "1";

// console.log(valor3 === valor4)

let nome1 = "Gabriel";
let nome2 = "gabriel";
// console.log(nome1.toUpperCase() === nome2.toUpperCase())

let bool1 = true;
let bool2 = 1;

// console.log(bool1 === bool2);
// console.log(bool2)

//Não importa aspas simples ou duplas
let str1 = "teste " + nome1;
let str2 = "teste";
//Template string, multiplas linhas e concatenação
let tstr = `teste ${nome1}`;

// console.log(str1);
// console.log(tstr);

let nome = "Gabriel";
let sobrenome = "Michalski";

let nome_completo = nome + " " + sobrenome;
console.log(nome_completo);

nome_completo = `${nome} ${sobrenome}`;
// console.log(str1);
