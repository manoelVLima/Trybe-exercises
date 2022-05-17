// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// let n = 5;
// let frase = "";
// let contador = 0;
// for(let i=1; i<=n;i++){
//     frase += "*";
// }
// while(contador<n){
//     console.log(frase);
//     contador+=1;
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5;
// let frase = "";
// let simbolo = "*"

// for(let i=1; i<=n;i++){
//     frase += simbolo;
//     console.log(frase)
// }

// 3- Agora inverta o lado do triângulo. 

// let n = 5;
// let frase = "";
// let simbolo = "*"
// let contador = n;

// for(let linhaI=0; linhaI < n;linhaI+=1){ // cada linha
//     for(let colunaI = 1; colunaI <=n; colunaI +=1){ // organiza o espaço em cada linha
//         if(colunaI < contador){
//             frase = frase + ' ';
//         } else{
//             frase = frase + simbolo;
//         }
//     }
// console.log(frase);
// frase = '';
// contador = contador - 1;

// }

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

// let numero = 9;
// let primo = 0;

// for(var dividendo = 2; dividendo < numero; dividendo+=1 ){

//     if(numero % dividendo !== 0){
//         primo = primo + 2;
//         break;

//     }       
// }
// if(primo === 2){
//     console.log("Este numero é primo")
    
// } else{
//     console.log("Não é primo");
    
// } 


let divisors = 1;
let numberToCheck = 9;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
