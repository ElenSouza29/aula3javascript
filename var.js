// Escopo global
function teste1() {
  console.log(mensagem);
}

var mensagem = "teste";
teste1();

// Forma mais interessante
function teste2(mensagem1) {
  console.log(mensagem1);
}

teste2("teste");
