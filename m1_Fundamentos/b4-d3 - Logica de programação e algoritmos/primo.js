


// NUMERO PRIMO
let primo;
let maiorNumero =0;
for(num = 0; num <= 50; num+=1){
    for(let  divisor = 2; divisor < num; divisor +=1){
        if(num % divisor === 0 ){
            primo = false;   
    }else{
        primo = true;
    }
    if(primo === true ){
        maiorNumero = num;
    }
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

