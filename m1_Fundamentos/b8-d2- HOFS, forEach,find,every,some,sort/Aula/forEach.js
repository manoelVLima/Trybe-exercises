// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];


// const convertToUpperCase = (names) => {
//   names.forEach((element,index) => {
//     names[index] = element.toUpperCase()
    
//     console.log(names[index]);
//   })
// }

// convertToUpperCase(names);

// o forEach percorre todo o array selecionado. Seus parametros são forEach((element,index,array)). Não é obrigatório utilizar todos os parâmetros. A HOF forEach não possui retorno, então é necessário implementar algum retorno, seja com o console.log ou a criação de um array de retorno por exemplo  

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
const testReturn = (lista) => {
  const array = []
  lista.forEach((element) => {
    array.push(element)
    // console.log(array);
  })
  return array;
}
testReturn(emailListInData);

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(element => {
//   console.log(`O email ${element} está cadastrado em nosso banco de dados!`);
// });

// const showEmailList = (emailList) => {
//   emailList.forEach((element,index,array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array.length);
//   })
// }
// showEmailList(emailListInData);

