// ============================== FOR IN e FOR OF ======================================

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//   let carro = ['fiat',500,'white']
  
//   for (let index in carro) {
//     console.log(index);
//   }

  // o FORin percorre o array/objeto retornando os indices de cada propriedade. No caso de um array (0,1,2) e para um objeto (type,model,color) por exemplo.

//   let food = ['hamburguer', 'bife', 'acarajé'];
// for (let index of food) {
//   console.log(index);
// };
// OU SEJA, O FOR OF ELE PERCORRE O VALOR DE CADA INDICE


// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
//   for (let index in names){
//     console.log(`Olá ${index}`);
//   }

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let index in car){
    console.log(index,car[index])
  }