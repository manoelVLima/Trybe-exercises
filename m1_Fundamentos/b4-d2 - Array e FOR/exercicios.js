let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // lenght 10

//1: Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for(let i = 0 ; i < numbers.length; i+=1){
//     console.log(numbers[i]);
// }

//2: Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//  let soma = 0;
// for(let i = 0; i < numbers.length; i+=1){
//     soma = soma + numbers[i];
// }
// console.log(soma);

//3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
//  let soma = 0;
// for(let i = 0; i < numbers.length; i+=1){
//     soma = soma + numbers[i];
// }
// console.log(soma/numbers.length);

//4: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let soma = 0;
// for(let i = 0; i < numbers.length; i+=1){
//     soma = soma + numbers[i];
// }
// let media = soma/numbers.length
// if(media>20){
//     console.log("Valor maior que 20");
// }else{
//     console.log("Valor menor ou igual a 20");
// }

//5: 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let maiorValor;

// for(let i=0; i<numbers.length; i+=1){
//     maiorValor = numbers[i];
//     if(number[i+1]> maiorValor){
//         maiorValor = numbers[i+1]
//         console.log(maiorValor);
//     }
// }

//6:Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let contador= 0;
for(let index=0; index<numbers.length; index+=1){
    if(numbers[index]%2 !== 0){
        contador++;
    }
}
console.log(contador);
 