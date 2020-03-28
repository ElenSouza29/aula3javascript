const arr = ["Morango", "Laranja", "Tamarindo"];

console.log(arr);

// for (let count = 0; count < arr.length; count++) {
//   console.log(`Fruta: ${arr[count]}`);
// }

// let teste = 10;
// teste = teste + 1;
// teste += 1;
// teste++;

// for (let count in arr) {
//   console.log(`Fruta: ${arr[count]}`);
// }

const monstraItem = (fruit, index) => {
  console.log(`Fruta: ${fruit} no index: ${index}`);
};

// monstraItem(arr[0]);
// monstraItem(arr[1]);
arr.forEach(monstraItem);
console.log(arr);

const teste = arr.map(fruit => {
  return { fruta: fruit }
});
// console.log(teste);

const itemFilter =  arr.filter((fruit) => {
  if(fruit.includes('o')) {
    return true
  }
});
// console.log(itemFilter)

const itemFilterObj =  teste.filter((fruit) => {
  return fruit.fruta == "Morango"
});
// console.log(itemFilterObj)

const itemFindObj =  teste.find((fruit) => {
  return fruit.fruta.includes('o')
});
console.log(itemFindObj)