// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);
// // 3
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.push("Lanche da tarde"); // adiciona ao ultimo elemento do array
tasksList.unshift("Acordar"); // adiciona ao primeiro item do array
tasksList.pop(); // remove o ultimo elemento do array..
tasksList.shift(); // remove o primeiro elemento do array.

console.log(tasksList)

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro