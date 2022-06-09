// const fatorial = (number) => {
//   let contador = 1;
//   for(let index = 1; index <= number; index += 1 ){
//     contador *= index;
//   }
//   return contador;
// }
// console.log(fatorial(5));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));