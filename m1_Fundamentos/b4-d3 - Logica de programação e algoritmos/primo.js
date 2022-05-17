


// NUMERO PRIMO

let maiorNumero =0;

for(divisor = 0; divisor<= 50; divisor+=1){
    let primo = true;
    for(dividendo = 2; dividendo < divisor; dividendo+=1){
        if(divisor%dividendo == 0){
            primo = false;
        }
    }
    if(primo){
        maiorNumero = divisor;
        
    }
}
console.log(maiorNumero);




















// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);

