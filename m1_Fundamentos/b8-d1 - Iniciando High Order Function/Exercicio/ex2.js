const numberGiven = (number) => number;

const result = (teste) => {
  let lottery = Math.floor(Math.random()*5);
  console.log(lottery);
  return teste === lottery ? 'Parabens você ganhou' : 'Tente novamente';
}
console.log(result(numberGiven(2)));