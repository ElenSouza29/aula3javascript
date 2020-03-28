// Declaracao funcao
function funcao1(message) {
  console.log(message);
}

funcao1("Teste Funcão 1");

// Funcao anonima
const funcao2 = function(message) {
  console.log(message);
};

funcao2("Teste Funcão 2");

const arrowFunction = message => {
  console.log(message);
};

arrowFunction("Teste Funcão 3");

const teste = {
  teste: 10,
  funcao1: () => {
    console.log(this.teste);
  },
  mostrarMsg: message => {
    console.log(message);
  },
  funcao2() {
    this.mostrarMsg(this.teste);
  }
};

teste.funcao1();
teste.funcao2();
