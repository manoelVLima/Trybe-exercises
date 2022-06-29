// const numbers = [19, 21, 30, 3, 45, 22, 15];

//   const findDivisibleBy3And5 = (numbers) => numbers.find((number) => number % 3 === 0 && number % 5 === 0)
    
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (arr) => arr.find((name) => name.length === 5);

// console.log(findNameWithFiveLetters(names));

// A HOF find retorna o primeiro elemento do array que condiz com a condição expressada.

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (arr) => arr.find((musica) => musica.id === '31031685');


console.log(findMusic(musicas))