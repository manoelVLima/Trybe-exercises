// Programa 1: Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

// const a = 3;
// const b = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// Programa 2: Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

//  const num1 = 7;
//  const num2 = 4;

//  if (num1 > num2){
//      console.log("O primeiro número é o maior");
//  } else{
//      console.log("O segundo número é maior");
//  }

// Programa 3: Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const num1 = 7;
// const num2 = 10;
// const num3 = 12;

//  if (num1 > num2 && num1 > num3){
//      console.log("O primeiro número é o maior");
//  } else if(num2 > num1 && num2 > num3){
//      console.log("O segundo número é maior");
//  }else if(num3 > num1 && num3 > num2){
//      console.log("O terceiro número é o maior");
//  } else{
//      console.log("Há numeros de mesmo valor!");
//  }

// Programa 4: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const num1 = 0;

// if(num1 > 0){
//     console.log("positive")
// } else if(num1 < 0){
//     console.log("negative")
// } else{
//     console.log("zero")
// }

// Programa 5: Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const a1 = 50;
// const a2 = -20;
// const a3 = 100;

// const soma = a3+a2+a1;
// if(a1 < 0 || a2 < 0 || a3 < 0){
//     console.log("[ERROR] Valores indevidos...")
// }
// else if(soma == 180){
//     console.log("true");
// }else if(soma !== 180){
//     console.log("false");
// }

// Programa 6: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// const peca = "rEI";

// if (peca.toLowerCase() === "rei") {
//   console.log(
//     "O Rei pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa."
//   );
// } else if (peca.toLowerCase() === "rainha") {
//   console.log(
//     "Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais."
//   );
// } else if (peca.toLowerCase() === "torre") {
//   console.log(
//     "A torre pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda)."
//   );
// } else if (peca.toLowerCase() === "bispo") {
//   console.log(
//     "O bispo não tem restrição de número de casas, mas somente no sentido diagonal."
//   );
// } else if (peca.toLowerCase() === "peao") {
//   console.log(
//     "O peão pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal."
//   );
// } else if (peca.toLowerCase() === "cavalo") {
//   console.log(
//     "O cavalo realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção."
//   );
// }

// Programa 7: Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

// const nota = 10000;

// const porc = nota/100;

// if(porc < 0 || porc > 100){
//     console.log("[ERROR]");
// } else if(porc >= 90){
//     console.log("NOta A");
// } else if(porc >= 80){
//     console.log("NOta B");
// } else if(porc >= 70){
//     console.log("NOta C");
// } else if(porc >= 60){
//     console.log("NOta D");
// } else if(porc >= 50){
//     console.log("NOta E");
// } else if(porc < 50){
//     console.log("NOta F");
// } 

// Programa 8: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

// const a = 33;
// const b = 23;
// const c = 43;


// if(a%2 == 0 || b%2 == 0 || c%2 == 0){
//     const num1 = a;
//     const num2 = b;
//     const num3 = c;
//     console.log(`true, Os três numeros são ${num1},${num2},${num3}`) // template string
// } else{
//     console.log("false")
// }

// Programa 9: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

// const a = 2;
// const b = 2;
// const c = 2;


// if(a%2 !== 0 || b%2 !== 0 || c%2 !== 0){
//     const num1 = a;
//     const num2 = b;
//     const num3 = c;
//     console.log(`true, Os três numeros são ${num1},${num2},${num3}`) // template string
// } else{
//     console.log("false")
// }

// Programa 10: Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// let custo = 100;
// let venda = -170;
// let imposto = 0.2;
// if (custo >=0 && venda>=170  ){
//     let custoTotal = custo +(custo*imposto)

// let lucro = venda - custoTotal

// console.log(`O lucro por mil unidades é equivalente a: ${lucro*1000}`)
// } else{
//     console.log("[ERROR]")
// }


// Programa 11: Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.


const salarioBruto = 3000;

    // INSS
    if(salarioBruto <= 1556.95){
        let salarioBase = salarioBruto - (salarioBruto*0.08)
    // calcular o IR
        if (salarioBase <= 1903.38){
            console.log(`Você não paga IR então seu salário liquido é de ${salarioBase}...`)
        } else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
        let  salarioLiquido = salarioBase + ((salarioBase*0.075) - 142.8);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
            let  salarioLiquido = salarioBase + ((salarioBase*0.15) - 354.8);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase >= 3751.06  && salarioBase <= 4664.68){
            let  salarioLiquido = salarioBase + ((salarioBase*0.225) - 636.13);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase > 4664.68){
            let  salarioLiquido = salarioBase + ((salarioBase*0.275) - 869.36);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } 
    }else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
        let salarioBase = salarioBruto - (salarioBruto*0.09)
        // calcular o IR
        if (salarioBase <= 1903.38){
            console.log(`Você não paga IR então seu salário liquido é de ${salarioBase}...`)
        } else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
        let  salarioLiquido = salarioBase + ((salarioBase*0.075) - 142.8);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
            let  salarioLiquido = salarioBase + ((salarioBase*0.15) - 354.8);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase >= 3751.06  && salarioBase <= 4664.68){
            let  salarioLiquido = salarioBase + ((salarioBase*0.225) - 636.13);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase > 4664.68){
            let  salarioLiquido = salarioBase + ((salarioBase*0.275) - 869.36);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        }  
    }else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
        let salarioBase = salarioBruto - (salarioBruto*0.11)
        // calcular o IR
        if (salarioBase <= 1903.38){
            console.log(`Você não paga IR então seu salário liquido é de ${salarioBase}...`)
        } else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
        let  salarioLiquido = salarioBase + ((salarioBase*0.075) - 142.8);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
            let  salarioLiquido = salarioBase + ((salarioBase*0.15) - 354.8);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase >= 3751.06  && salarioBase <= 4664.68){
            let  salarioLiquido = salarioBase + ((salarioBase*0.225) - 636.13);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase > 4664.68){
            let  salarioLiquido = salarioBase + ((salarioBase*0.275) - 869.36);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        }  
    }else if(salarioBruto > 5189.32){
        let salarioBase = salarioBruto - 570.88
        // calcular o IR
        if (salarioBase <= 1903.38){
            console.log(`Você não paga IR então seu salário liquido é de ${salarioBase}...`)
        } else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
        let  salarioLiquido = salarioBase + ((salarioBase*0.075) - 142.8);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
            let  salarioLiquido = salarioBase + ((salarioBase*0.15) - 354.8);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase >= 3751.06  && salarioBase <= 4664.68){
            let  salarioLiquido = salarioBase + ((salarioBase*0.225) - 636.13);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        } else if(salarioBase > 4664.68){
            let  salarioLiquido = salarioBase + ((salarioBase*0.275) - 869.36);
            console.log(`Seu salario liquido é de ${salarioLiquido}`)
        }   
    }
