
// let numero = 55;


// let array = [0,1,2,3,4,5,6,7,8,9,10];

// if(array.indexOf(numero) == -1){
//     console.log(`O numero ${numero} não está no intervalo`); 
//     // Quando um valor não está presente no array o retorno é -1
//     // ex: array.indexOf(array,[ponto de partida])
// } else{
//     console.log(`O numero ${numero} está no intervalo`);
// }



// let numerosImpares = "";

// for(let index = 0; index <=50; index+=1){
//     if(index%2 !== 0){
//         numerosImpares += `${index},`;
        
//     } 
// } 
// console.log(` Os valores impares de 0 a 50 são: ${numerosImpares}`)

let numerosImpares = [];

for(let i=0; i<=300;i+=1){
    if(i%2 != 0){
        numerosImpares.push(i);
    }
}
console.log(numerosImpares)

// let divide = 0;

// for(let i=0; i<500; i+=1){
//     if(i%3 === 0){
//         divide+=1;   
//     }

// }
// if(divide > 50){
//     console.log("Há 50 ou mais numeros divisiveis por 3.")
// } else{
//     console.log("Sequência muito pequena");
// }
// console.log(`O numero de divisores é igual a: ${divide}`)
