//  const longestWord = (frase) => {
//   let maiorPalavra = 0
//   let fraseTest = frase.split(' ');
//   let resultado = '';
//   for( let word of fraseTest){
//     if(word.length > maiorPalavra){
//       maiorPalavra = word.length;
//       resultado = word;
//     }
//   }
//   return resultado;
// } 

//  console.log(longestWord('Antônioderts foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'

const longestWord = (text) => text.split(' ').sort((a,b) => b.length - a.length)[0];

 console.log(longestWord('Antônioderts foi no banheiro e não sabemos o que aconteceu'));
