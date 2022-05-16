let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array[0];
let maior = array[0];

// PARA O MENOR
for (let index = 0; index < array.length; index+=1){
    if(array[index].length < menor.length){
        menor = array[index];
    }
    
}
console.log(`O menor elemento do array é: ${menor.toLocaleUpperCase()}`)

// PARA O MAIOR

for(index=0; index < array.length; index +=1){
    if(array[index].length > maior.length){
        maior = array[index];
    }
}
console.log(`O maior elemento do array é: ${maior.toLocaleUpperCase()}`)