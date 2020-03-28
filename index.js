const utils = require('./utils')
console.log(utils)
console.log(utils.sum(1,2))


const pessoa = {
  nome: "Gabriel",
  sobrenome: "Michalski",
  idade: 23
};

// const { nome,sobrenome,idade } = pessoa;
// console.log(sobrenome)

const mostrar = ({ nome,sobrenome } ) => {
  console.log(`Nome ${nome}, sobrenome ${sobrenome}`)
}

mostrar(pessoa)