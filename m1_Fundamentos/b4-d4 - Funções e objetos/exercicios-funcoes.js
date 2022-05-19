// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

//  function palindromo(string){
    
//     let reverso = string.split("").reverse().join("");

//     if(string === reverso){
//         return true;
//     } else{
//         return false;
//     }
 
// } console.log(palindromo(("mamam")));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// function maiorIndice(array){
// let maiorNumero = 0; // poderia ser o primeiro elemento do array.
// let armazenarIndice = 0;
// for (let index in array){
//     if(array[index] > maiorNumero){
//     maiorNumero = array[index];
//     armazenarIndice = index;
//     }
//   }
//   return armazenarIndice;
// }

// console.log(maiorIndice([2, 3, 6, 7, 10, 1]))

// 3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// function menorIndice(array){
// let menorNumero = array[0]; // poderia ser o primeiro elemento do array.
// let armazenarIndice = 0;
// for (let index in array){
//     if(array[index] < menorNumero){
//     menorNumero = array[index];
//     armazenarIndice = index;
//     }
//   }
//   return armazenarIndice;
// } console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// function maiorArray(array){
//     let maior = array[0];
//     for(let index of array){
//         if(index.length > maior.length){
//             maior = index;
//         }
//     }
//     return maior;
// } console.log(maiorArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//Duas formas de resolver o exercício
// function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
//     for (let index in numeros) {
//       for (let index2 in numeros) {
//         if (numeros[index] === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }
//     return numeros[indexNumeroRepetido];
//   }
//   console.log(maisRepetido([5, 3, 5, 5, 3, 3, 3])); //2

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// let n = 6;
// let somatorio = 0;
// for(let index = 1; index <= n; index+=1){
//     somatorio += index;
// } console.log(somatorio)

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

let palavra = 'manoel';
let finalPalavra = 'ogl';
let confirmacao = true;
palavra = palavra.split("");
finalPalavra = finalPalavra.split("")

for (let index=0; index < finalPalavra.length; index+=1){
    if(finalPalavra[index] != palavra[palavra.length - finalPalavra.length + index]){
        confirmacao = false;
    }

} console.log(confirmacao);


 // como concatenar 2 string
// function concatName(array) {

//   let concatenar = [];
//   let teste = concatenar.concat(array[array.length-1],array[0]);

//   return teste;
// }console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));