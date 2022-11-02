const readline = require('readline-sync');

function IMC() {
  const weight = readline.questionFloat("What's your weight?");
  const height = readline.questionFloat("What's your height?");
  const imc = weight/(height**2);

  if(imc < 18.5) {
    console.log("O indice de massa corporal(IMC) é de :", imc,"% e você está abaixo do peso")
    return;
  }
  if(imc <= 24.9) {
    console.log("O indice de massa corporal(IMC) é de :", imc,"% e você está com um peso normal")
    return;
  }
  if(imc <= 29.9) {
    console.log("O indice de massa corporal(IMC) é de :", imc,"% e você está acima do peso")
    return;
  }
  if(imc <= 34.9) {
    console.log("O indice de massa corporal(IMC) é de :", imc,"% e você está com Obesidade Grau I")
    return;
  }
  if(imc <= 39.9) {
    console.log("O indice de massa corporal(IMC) é de :", imc,"% e você está com Obesidade Grau II")
    return;
  }
    console.log("O indice de massa corporal(IMC) é de :", imc,"% e você está com Obesidade Grau III e IV")
    
}

IMC();