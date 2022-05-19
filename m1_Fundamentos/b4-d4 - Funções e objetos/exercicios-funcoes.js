// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

 function palindromo(string){
    
    let reverso = string.split("").reverse().join("");

    if(string === reverso){
        return true;
    } else{
        return false;
    }
 
} console.log(palindromo(("mamam")));

