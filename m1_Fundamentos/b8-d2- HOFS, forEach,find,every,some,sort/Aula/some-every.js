// Some retorna TRUE se ao menos um elemento de um array satisfaz uma condição.
// Every retorna TRUE se todos os elementos de um array satisfazem uma condição.

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) =>  element === name);
  
console.log(hasName(names, 'Manoel'))

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 18 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);


// console.log(verifyAges(people, 18));