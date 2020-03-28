const arr = [];

//Insere no final do array
// arr.push("teste2");
// arr.push(1);
// arr.push(true);

//Insere no inicio do array
// arr.unshift("inicio do array") ;

//Remove do final do array
// arr.pop();

//Remove do inicio do array
// arr.shift();

console.log(arr);

const pessoa1 = {
  nome: "Joao",
  sobrenome: "Silva Sauro",
  idade: 60,
  mostrarNome() {
    console.log(this.nome);
  }
};

pessoa1.mostrarNome();

const pessoa2 = {
  nome: "Gabriel",
  sobrenome: "Michalski",
  idade: 23
};

// arr.push(pessoa1);
// arr.push(pessoa2);
// console.log(arr);

// pessoa1["nome"] = "Enzo";
// pessoa1.Teste = "Enzo";

// console.log(arr);

// console.log(pessoa1);

// arr.push(pessoa1);
// arr.push(pessoa2);
// console.log(arr.length);
