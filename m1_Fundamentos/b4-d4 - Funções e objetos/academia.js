// let altura = 5;
// let base = 5;
// let resultado = {};
// function AreaPerimetro (base,altura){
//     let area = base*altura;
//     let perimetro = (2*base) + (2*altura);

//     resultado["Area"] = area;
//     resultado["Perimetro"] = perimetro;

//     return resultado;
// }
// console.log(AreaPerimetro(5,5));

let array = [1,2,3,4,5,6,7,8]
let numeroPares = 0;
let numeroImpares = 0;
function ParImpar (array){
    for(let index of array){
        if (array[index]% 2 === 0){
            numeroPares++;
        } else {
            numeroImpares++;
        }
    }
    return `O numero de par é igual a ${numeroPares}. E o numero de impares é igual a ${numeroImpares}`;
}
console.log(ParImpar(array))