let pizzas = ["Queijo","Presunto","Frango"];


pizzas.push("Chocolate"); // adiciona um novo elemento ao final do array

// pizzas.lenght -> retornara o tamanho do array
pizzas[4] = "Catupiry"

// console.log("Menu de sabores: " + pizzas +" " +pizzas.length)// sem o sinal de concatenação o array aparece com colchetes

for(let i=0;i<pizzas.length;i++){
    console.log(pizzas[i]);
}
// Nota : o i deve ser menor do que o tamanho do array porque o array apesar de ter 5 elementos, a sua contagem só vai até 4: 0 1 2 3 4